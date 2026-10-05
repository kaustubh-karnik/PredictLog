export function ScenariosPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none pb-12">
      <div className="bg-surface-container-low px-space-lg py-2 flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">SCENARIOS</span>
          </div>
          <span className="text-outline-variant">/</span>
          <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant">
            <span>Simulation</span>
            <span className="text-outline-variant">›</span>
            <span className="text-primary font-medium">Exercise Trishul</span>
          </div>
        </div>
      </div>
      <div className="p-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="bg-surface-container border border-outline-variant/40 border-l-4 border-l-primary p-space-md shadow-sm">
            <h4 className="font-label-md text-label-md text-on-surface uppercase font-bold tracking-wide">Scenario 04 (Active)</h4>
            <div className="font-headline-sm text-headline-sm text-on-surface mt-1">Mountain Surge</div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              High-intensity operations in Northern Sector with disrupted supply lines and severe weather anomalies.
            </p>
          </div>
          <div className="bg-surface-container border border-outline-variant/40 border-l-4 border-l-surface-variant p-space-md shadow-sm opacity-70">
            <h4 className="font-label-md text-label-md text-on-surface uppercase font-bold tracking-wide">Scenario 05 (Idle)</h4>
            <div className="font-headline-sm text-headline-sm text-on-surface mt-1">Desert Fox</div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Rapid armored deployment in Western Sector under compromised communications conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
