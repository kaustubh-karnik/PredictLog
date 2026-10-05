export function DataHealthPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none pb-12">
      <div className="bg-surface-container-low px-space-lg py-2 flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">DATA HEALTH</span>
          </div>
          <span className="text-outline-variant">/</span>
          <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant">
            <span>System</span>
            <span className="text-outline-variant">›</span>
            <span className="text-primary font-medium">Diagnostics</span>
          </div>
        </div>
      </div>
      <div className="p-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <div className="p-space-md border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high/40 transition-colors">
            <div className="flex items-center justify-between text-on-surface-variant mb-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Overall Freshness</span>
              <span className="material-symbols-outlined text-[16px] text-primary">vital_signs</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-telemetry-lg text-telemetry-lg font-bold text-on-surface tracking-tight">87%</span>
            </div>
          </div>
          <div className="p-space-md border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high/40 transition-colors">
            <div className="flex items-center justify-between text-on-surface-variant mb-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Store & Fwd Lag</span>
              <span className="material-symbols-outlined text-[16px] text-tertiary">av_timer</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-telemetry-lg text-telemetry-lg font-bold text-tertiary tracking-tight">11m</span>
            </div>
          </div>
        </div>
        <div className="mt-space-lg bg-surface-container-low border border-outline-variant/30 p-space-md">
           <h3 className="font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface font-semibold mb-4">Telemetry Feeds</h3>
           <div className="w-full h-2 bg-surface-container-high overflow-hidden rounded mb-2">
             <div className="h-full bg-primary" style={{ width: '87%' }}></div>
           </div>
           <p className="font-telemetry-sm text-telemetry-sm text-on-surface-variant">
             87% of active feeds are within nominal tolerance thresholds.
           </p>
        </div>
      </div>
    </div>
  );
}
