import { useState } from 'react';
import { useTheme } from '../context';

interface ControlPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ControlPanelModal({ isOpen, onClose }: ControlPanelModalProps) {
  const { theme, setTheme } = useTheme();
  const [scenario, setScenario] = useState('04');
  const [speed, setSpeed] = useState('1x');
  const [storeFwd, setStoreFwd] = useState(true);
  const [alertBeep, setAlertBeep] = useState(true);
  const [bandwidthLimit, setBandwidthLimit] = useState('Standard (MIL-STD-188A)');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none animate-fadeIn">
      <div 
        className="w-full max-w-xl bg-surface-container border border-outline-variant/60 shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-space-lg py-space-sm bg-surface-container-low border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary">tune</span>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface font-semibold">
                Control Panel
              </span>
              <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">
                OPERATIONAL ENVIRONMENT &amp; SYSTEM SETTINGS
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center border border-outline-variant/40 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
            title="Close Control Panel"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-space-lg space-y-space-md max-h-[80vh] overflow-y-auto">
          {/* SECTION 1: THEME & DISPLAY MODE */}
          <div className="bg-surface-container-low border border-outline-variant/40 p-space-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-primary">
                  {theme === 'dark' ? 'dark_mode' : 'light_mode'}
                </span>
                <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                  Display Mode (Theme)
                </span>
              </div>
              <span className="font-telemetry-sm text-telemetry-sm text-primary uppercase font-bold">
                [{theme.toUpperCase()} ACTIVE]
              </span>
            </div>
            
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              Switch between Tactical Dark (calibrated for night watches &amp; field ops consoles) and Daylight Light (high contrast for sunlight briefings &amp; presentation screens).
            </p>

            {/* Segmented Theme Switcher */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`flex items-center justify-center gap-2 py-2 px-3 border transition-all ${
                  theme === 'dark'
                    ? 'bg-primary-container text-on-primary-container border-primary font-semibold shadow-sm'
                    : 'bg-surface-container text-on-surface-variant border-outline-variant/40 hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">dark_mode</span>
                <div className="flex flex-col text-left">
                  <span className="font-label-sm text-label-sm uppercase leading-tight">Dark Mode</span>
                  <span className="font-telemetry-sm text-[10px] opacity-80 leading-tight">Tactical Slate</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`flex items-center justify-center gap-2 py-2 px-3 border transition-all ${
                  theme === 'light'
                    ? 'bg-primary-container text-on-primary-container border-primary font-semibold shadow-sm'
                    : 'bg-surface-container text-on-surface-variant border-outline-variant/40 hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">light_mode</span>
                <div className="flex flex-col text-left">
                  <span className="font-label-sm text-label-sm uppercase leading-tight">Light Mode</span>
                  <span className="font-telemetry-sm text-[10px] opacity-80 leading-tight">Daylight Clarity</span>
                </div>
              </button>
            </div>
          </div>

          {/* SECTION 2: SIMULATION PARAMETERS */}
          <div className="bg-surface-container-low border border-outline-variant/40 p-space-md space-y-3">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="material-symbols-outlined text-[17px] text-tertiary">layers</span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                Exercise Scenario
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <label 
                className={`flex items-start gap-2 p-2 border cursor-pointer transition-colors ${
                  scenario === '04'
                    ? 'border-primary bg-primary-container/10 text-on-surface'
                    : 'border-outline-variant/30 bg-surface-container text-on-surface-variant hover:border-outline-variant'
                }`}
              >
                <input
                  type="radio"
                  name="scenario"
                  value="04"
                  checked={scenario === '04'}
                  onChange={() => setScenario('04')}
                  className="mt-0.5"
                />
                <div>
                  <div className="font-label-sm text-label-sm font-semibold uppercase text-on-surface">
                    Ex Trishul (Scenario 04)
                  </div>
                  <div className="font-telemetry-sm text-[10px] text-on-surface-variant">
                    Mountain Surge · Ladakh Corridors
                  </div>
                </div>
              </label>

              <label 
                className={`flex items-start gap-2 p-2 border cursor-pointer transition-colors ${
                  scenario === '05'
                    ? 'border-primary bg-primary-container/10 text-on-surface'
                    : 'border-outline-variant/30 bg-surface-container text-on-surface-variant hover:border-outline-variant'
                }`}
              >
                <input
                  type="radio"
                  name="scenario"
                  value="05"
                  checked={scenario === '05'}
                  onChange={() => setScenario('05')}
                  className="mt-0.5"
                />
                <div>
                  <div className="font-label-sm text-label-sm font-semibold uppercase text-on-surface">
                    Desert Strike (Scenario 05)
                  </div>
                  <div className="font-telemetry-sm text-[10px] text-on-surface-variant">
                    Western Rim · Long Line Armor
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* SECTION 3: TELEMETRY ENGINE & SPEED */}
          <div className="bg-surface-container-low border border-outline-variant/40 p-space-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-primary">speed</span>
                Simulation Clock Velocity
              </span>
              <div className="flex gap-1">
                {['1x', '2x', '5x', '10x'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSpeed(s)}
                    className={`font-telemetry-sm text-telemetry-sm px-2 py-0.5 border ${
                      speed === s
                        ? 'bg-primary text-on-primary border-primary font-bold'
                        : 'bg-surface-container text-on-surface-variant border-outline-variant/40 hover:bg-surface-container-high'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface font-medium">Store &amp; Forward Simulation</span>
                <span className="font-telemetry-sm text-[11px] text-on-surface-variant">Simulate high-altitude degraded RF links</span>
              </div>
              <button
                type="button"
                onClick={() => setStoreFwd(!storeFwd)}
                className={`px-2.5 py-1 font-label-sm text-label-sm uppercase font-bold border transition-colors ${
                  storeFwd
                    ? 'bg-tertiary-container text-on-tertiary-container border-tertiary/50'
                    : 'bg-surface-container text-on-surface-variant border-outline-variant/40'
                }`}
              >
                {storeFwd ? 'ENABLED [14 PKTS]' : 'BYPASS'}
              </button>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface font-medium">Audible Tactical Alert Tone</span>
                <span className="font-telemetry-sm text-[11px] text-on-surface-variant">Trigger audio beep on critical shortfall transitions</span>
              </div>
              <button
                type="button"
                onClick={() => setAlertBeep(!alertBeep)}
                className={`px-2.5 py-1 font-label-sm text-label-sm uppercase font-bold border transition-colors ${
                  alertBeep
                    ? 'bg-primary-container text-on-primary-container border-primary/50'
                    : 'bg-surface-container text-on-surface-variant border-outline-variant/40'
                }`}
              >
                {alertBeep ? 'ACTIVE' : 'MUTED'}
              </button>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
              <span className="font-label-sm text-label-sm text-on-surface font-medium">Data Attestation Protocol</span>
              <select
                value={bandwidthLimit}
                onChange={(e) => setBandwidthLimit(e.target.value)}
                className="bg-surface-container border border-outline-variant/40 text-on-surface font-telemetry-sm text-telemetry-sm px-2 py-1"
              >
                <option>Standard (MIL-STD-188A)</option>
                <option>Low-Bandwidth Satcom (16kbps)</option>
                <option>Optical Fiber Mesh (Gigabit)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-space-lg py-2 bg-surface-container-low border-t border-outline-variant/40 flex items-center justify-between">
          <div className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">
            ACTIVE PROFILE: TAC-OPERATOR-NORTH
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-primary-container text-on-primary-container border border-primary/60 font-label-sm text-label-sm uppercase font-semibold hover:bg-primary-container/80 transition-colors"
          >
            Apply &amp; Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
