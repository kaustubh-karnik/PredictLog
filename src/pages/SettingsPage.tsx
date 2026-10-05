import { useTheme } from '../context';

export function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col w-full text-on-surface select-none pb-12">
      <div className="bg-surface-container-low px-space-lg py-2 flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">SETTINGS</span>
          </div>
        </div>
      </div>
      <div className="p-space-lg">
        <div className="max-w-3xl bg-surface-container border border-outline-variant/30 p-space-md">
           <h3 className="font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface font-semibold mb-4 border-b border-outline-variant/20 pb-2">Preferences</h3>
           <div className="space-y-4">
             <div className="flex items-center justify-between py-1">
               <div className="flex flex-col">
                 <span className="font-label-md text-label-md text-on-surface font-semibold">Interface Theme</span>
                 <span className="font-body-sm text-body-sm text-on-surface-variant">Toggle between Tactical Dark Mode and Daylight Light Mode</span>
               </div>
               <div className="flex items-center gap-2">
                 <button
                   type="button"
                   onClick={() => setTheme('dark')}
                   className={`px-3 py-1 font-label-sm text-label-sm uppercase font-bold border transition-colors flex items-center gap-1 ${
                     theme === 'dark'
                       ? 'bg-primary-container text-on-primary-container border-primary'
                       : 'bg-surface-container-low text-on-surface-variant border-outline-variant/40 hover:bg-surface-container-high'
                   }`}
                 >
                   <span className="material-symbols-outlined text-[15px]">dark_mode</span>
                   <span>Dark</span>
                 </button>
                 <button
                   type="button"
                   onClick={() => setTheme('light')}
                   className={`px-3 py-1 font-label-sm text-label-sm uppercase font-bold border transition-colors flex items-center gap-1 ${
                     theme === 'light'
                       ? 'bg-primary-container text-on-primary-container border-primary'
                       : 'bg-surface-container-low text-on-surface-variant border-outline-variant/40 hover:bg-surface-container-high'
                   }`}
                 >
                   <span className="material-symbols-outlined text-[15px]">light_mode</span>
                   <span>Light</span>
                 </button>
               </div>
             </div>
             <div className="flex items-center justify-between border-t border-outline-variant/20 pt-3">
               <span className="font-label-md text-label-md text-on-surface">Telemetry Auto-Refresh</span>
               <span className="text-primary font-bold font-telemetry-sm">ENABLED (30s)</span>
             </div>
             <div className="flex items-center justify-between">
               <span className="font-label-md text-label-md text-on-surface">Map Rendering</span>
               <span className="text-primary font-bold">VECTOR HIGH-RES</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
