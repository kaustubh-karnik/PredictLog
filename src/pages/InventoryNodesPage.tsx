export function InventoryNodesPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none pb-12">
      <div className="bg-surface-container-low px-space-lg py-2 flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">INVENTORY & NODES</span>
          </div>
          <span className="text-outline-variant">/</span>
          <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant">
            <span>Northern Sector</span>
            <span className="text-outline-variant">›</span>
            <span className="text-primary font-medium">Network Status</span>
          </div>
        </div>
      </div>
      <div className="p-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <div className="p-space-md border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high/40 transition-colors">
            <div className="flex items-center justify-between text-on-surface-variant mb-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Total Active Nodes</span>
              <span className="material-symbols-outlined text-[16px] text-primary">warehouse</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-telemetry-lg text-telemetry-lg font-bold text-on-surface tracking-tight">42</span>
              <span className="font-telemetry-sm text-telemetry-sm text-primary uppercase">Nominal</span>
            </div>
          </div>
          <div className="p-space-md border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high/40 transition-colors">
            <div className="flex items-center justify-between text-on-surface-variant mb-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Total Inventory Value</span>
              <span className="material-symbols-outlined text-[16px] text-primary">inventory</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-telemetry-lg text-telemetry-lg font-bold text-on-surface tracking-tight">89.4M</span>
              <span className="font-telemetry-sm text-telemetry-sm text-primary uppercase">Units</span>
            </div>
          </div>
          <div className="p-space-md border border-outline-variant/30 bg-error-container/10 border-l-2 border-l-error hover:bg-error-container/20 transition-colors">
            <div className="flex items-center justify-between text-error mb-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Critical Shortfalls</span>
              <span className="material-symbols-outlined text-[16px] text-error">error</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-telemetry-lg text-telemetry-lg font-bold text-error tracking-tight">03</span>
            </div>
          </div>
        </div>
        
        <div className="mt-space-lg bg-surface-container-low border border-outline-variant/30 p-space-md">
           <h3 className="font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface font-semibold mb-4">Node Directory</h3>
           <table className="w-full text-left font-telemetry-sm text-telemetry-sm border-collapse">
            <thead>
              <tr className="text-on-surface-variant border-b border-outline-variant/30 text-[10px] uppercase">
                <th className="py-2">Node ID</th>
                <th className="py-2">Location</th>
                <th className="py-2">Status</th>
                <th className="py-2">Capacity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              <tr className="hover:bg-surface-container-high/60 transition-colors">
                <td className="py-3 text-primary font-bold">NODE-LEH-01</td>
                <td className="py-3 text-on-surface">Leh Forward Base</td>
                <td className="py-3"><span className="text-error font-bold bg-error-container/20 px-1 py-0.5 border border-error/30">STOCK-OUT RISK</span></td>
                <td className="py-3 text-on-surface-variant">92% Utilized</td>
              </tr>
              <tr className="hover:bg-surface-container-high/60 transition-colors">
                <td className="py-3 text-primary font-bold">NODE-PTK-04</td>
                <td className="py-3 text-on-surface">Pathankot Depot</td>
                <td className="py-3"><span className="text-primary font-bold">NOMINAL</span></td>
                <td className="py-3 text-on-surface-variant">45% Utilized</td>
              </tr>
            </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
