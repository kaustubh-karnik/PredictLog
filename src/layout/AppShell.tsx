import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NAV_ITEMS, type NavPath } from '../constants';
import { useTheme } from '../context';
import { ControlPanelModal } from '../components/ControlPanelModal';
import { Logo } from '../components/Logo';

const activeNav =
  'bg-surface-container-high text-primary border-l-2 border-primary font-medium';
const inactiveNav =
  'text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface text-label-md font-label-md';

function navTo(path: NavPath) {
  return `/${path}`;
}

export function AppShell() {
  const { theme, toggleTheme } = useTheme();
  const [isControlPanelOpen, setIsControlPanelOpen] = useState(false);
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-[248px] bg-surface-container border-r border-outline-variant/30 z-50 flex flex-col justify-between select-none">
        <div className="flex flex-col flex-1 min-h-0">
          <div className="p-space-md border-b border-outline-variant/30 bg-surface-container-low/60">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <Logo className="w-6 h-6 object-cover rounded shadow-sm" />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface font-semibold leading-none">
                  PREDICTLOG
                </span>
                <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant/70 leading-tight mt-0.5">
                  BHARAT SUSTAINMENT GRID
                </span>
              </div>
            </div>
            <div className="mt-space-sm flex items-center justify-between bg-surface-container-high/60 px-space-xs py-0.5 border border-tertiary-container/40">
              <span className="font-telemetry-sm text-telemetry-sm text-tertiary font-medium uppercase">
                SIMULATION ENV
              </span>
              <span className="w-1.5 h-1.5 bg-tertiary animate-pulse" />
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto py-space-xs px-space-xs space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={navTo(item.path)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-space-sm py-1.5 transition-colors ${isActive ? activeNav : inactiveNav}`
                }
              >
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge ? (
                  <span
                    className={`font-telemetry-sm text-telemetry-sm px-1 py-0.2 leading-tight font-medium ${item.badgeClass ?? ''}`}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="border-t border-outline-variant/30 bg-surface-container-lowest/80 p-space-sm flex flex-col gap-space-xs">
          <div className="p-space-xs bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                Connectivity
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-tertiary border border-tertiary-container" />
                <span className="font-telemetry-sm text-telemetry-sm text-tertiary">Store & Fwd</span>
              </div>
            </div>
            <div className="flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant/80">
              <span>Queue:</span>
              <span className="text-on-surface">14 PKTS</span>
            </div>
            <div className="flex items-center justify-between font-telemetry-sm text-telemetry-sm text-on-surface-variant/80">
              <span>Sync:</span>
              <span className="text-on-surface">17:24 IST (6m)</span>
            </div>
          </div>
          <div className="pt-1">
            <div className="font-label-sm text-label-sm text-on-surface font-semibold truncate">
              Ops Planner — HQ Northern
            </div>
            <div className="font-telemetry-sm text-telemetry-sm text-on-surface-variant/70">
              LOC: UDHAMPUR TAC-NODE
            </div>
          </div>
          <div className="pt-1 flex items-center justify-between border-t border-outline-variant/20 text-label-sm font-label-sm">
            <NavLink
              to="/settings"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[15px]">settings</span>
              Settings
            </NavLink>
            <NavLink
              to="/help"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[15px]">help</span>
              Manual
            </NavLink>
          </div>
        </div>
      </aside>

      <div className="pl-[248px]">
        <header className="fixed top-0 left-[248px] right-0 h-14 bg-surface-container/95 border-b border-outline-variant/30 z-40 flex items-center justify-between px-space-lg backdrop-blur-sm">
          <div className="flex items-center gap-space-sm min-w-0 font-telemetry-sm text-telemetry-sm">
            <span className="text-primary font-semibold">BSG</span>
            <span className="text-outline">/</span>
            <span className="text-on-surface-variant">Northern Sector</span>
            <span className="text-outline">/</span>
            <span className="text-on-surface-variant">Ex Trishul</span>
            <span className="text-outline">/</span>
            <span className="text-on-surface font-medium truncate">Logistics Ops</span>
          </div>
          <div className="flex items-center bg-surface-container-low border border-outline-variant/40 px-space-sm py-1 gap-space-sm">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-tertiary">layers</span>
              <span className="font-label-md text-label-md text-on-surface font-medium">
                Ex Trishul — Scenario 04 (Mountain Surge)
              </span>
            </div>
            <span className="text-outline-variant">|</span>
            <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">
              05 Oct 2026 · 17:30 IST
            </span>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
              expand_more
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden xl:flex items-center gap-space-xs font-telemetry-sm text-telemetry-sm text-on-surface-variant px-space-xs py-0.5 border border-outline-variant/30">
              <span className="material-symbols-outlined text-[14px] text-primary">sync</span>
              <span>SYNC 17:24</span>
            </div>
            <div className="flex items-center gap-1.5 font-telemetry-sm text-telemetry-sm bg-surface-container-low px-space-xs py-0.5 border border-tertiary/40">
              <span className="w-1.5 h-1.5 bg-tertiary" />
              <span className="text-tertiary">STORE-FWD [14]</span>
            </div>
            <button
              type="button"
              className="flex items-center gap-1 bg-surface-container-low text-error px-space-xs py-0.5 border border-error/40 hover:bg-error-container/30 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">notifications_active</span>
              <span className="font-telemetry-sm text-telemetry-sm font-semibold">3 CRIT</span>
            </button>

            {/* Quick Light/Dark Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="px-space-sm py-1 border border-outline-variant/60 bg-surface-container-low hover:bg-surface-container hover:border-primary text-on-surface font-label-sm text-label-sm uppercase font-semibold transition-colors flex items-center gap-1.5"
              aria-label="Toggle light and dark mode"
            >
              <span className="material-symbols-outlined text-[15px] text-primary">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            {/* Sim & Control Panel Button */}
            <button
              type="button"
              onClick={() => setIsControlPanelOpen(true)}
              className="px-space-sm py-1 border border-primary/50 text-primary hover:bg-primary-container/20 font-label-sm text-label-sm uppercase font-semibold transition-colors flex items-center gap-1"
              title="Open Simulation &amp; Display Control Panel"
            >
              <span className="material-symbols-outlined text-[15px]">tune</span>
              <span>Control Panel</span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-xs border-l border-outline-variant/30">
              <div className="w-8 h-8 rounded-full border border-primary/40 bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">person</span>
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold leading-none">
                  Capt. R. Sharma
                </span>
                <span className="font-telemetry-sm text-telemetry-sm text-primary leading-tight mt-0.5">
                  Ops Planner
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="relative w-full pt-14 bg-surface min-h-screen">
          <Outlet />
        </main>
      </div>

      {/* Global Control Panel Modal */}
      <ControlPanelModal
        isOpen={isControlPanelOpen}
        onClose={() => setIsControlPanelOpen(false)}
      />
    </div>
  );
}
