export function ConvoysPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none pb-12">
      <div className="bg-surface-container-low px-space-lg py-2 flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">CONVOYS</span>
          </div>
          <span className="text-outline-variant">/</span>
          <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant">
            <span>Northern Sector</span>
            <span className="text-outline-variant">›</span>
            <span className="text-primary font-medium">Active Movements</span>
          </div>
        </div>
      </div>
      <div className="p-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <div className="p-space-md border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high/40 transition-colors">
            <div className="flex items-center justify-between text-on-surface-variant mb-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">In Transit</span>
              <span className="material-symbols-outlined text-[16px] text-primary">local_shipping</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-telemetry-lg text-telemetry-lg font-bold text-on-surface tracking-tight">17</span>
            </div>
          </div>
          <div className="p-space-md border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high/40 transition-colors">
            <div className="flex items-center justify-between text-on-surface-variant mb-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Scheduled</span>
              <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-telemetry-lg text-telemetry-lg font-bold text-on-surface tracking-tight">08</span>
            </div>
          </div>
          <div className="p-space-md border border-outline-variant/30 bg-tertiary-container/10 border-l-2 border-l-tertiary hover:bg-tertiary-container/20 transition-colors">
            <div className="flex items-center justify-between text-tertiary mb-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Delayed</span>
              <span className="material-symbols-outlined text-[16px] text-tertiary">warning</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-telemetry-lg text-telemetry-lg font-bold text-tertiary tracking-tight">02</span>
            </div>
          </div>
          <div className="p-space-md border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high/40 transition-colors">
            <div className="flex items-center justify-between text-on-surface-variant mb-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Completed (24h)</span>
              <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-telemetry-lg text-telemetry-lg font-bold text-on-surface tracking-tight">24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
