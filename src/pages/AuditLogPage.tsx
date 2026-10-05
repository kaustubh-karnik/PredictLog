export function AuditLogPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none pb-12">
      <div className="bg-surface-container-low px-space-lg py-2 flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">AUDIT LOG</span>
          </div>
          <span className="text-outline-variant">/</span>
          <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant">
            <span>System</span>
            <span className="text-outline-variant">›</span>
            <span className="text-primary font-medium">Event Ledger</span>
          </div>
        </div>
      </div>
      <div className="p-space-lg">
        <div className="bg-surface-container-low border border-outline-variant/30 p-space-md">
           <table className="w-full text-left font-telemetry-sm text-telemetry-sm border-collapse">
            <thead>
              <tr className="text-on-surface-variant border-b border-outline-variant/30 text-[10px] uppercase">
                <th className="py-2">Timestamp (IST)</th>
                <th className="py-2">Event Code</th>
                <th className="py-2">User/System</th>
                <th className="py-2">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              <tr className="hover:bg-surface-container-high/60 transition-colors">
                <td className="py-3 text-on-surface-variant">17:30:04</td>
                <td className="py-3 text-primary font-bold">AUTH_01</td>
                <td className="py-3 text-on-surface">Capt. R. Sharma</td>
                <td className="py-3 text-on-surface">Session Initiated</td>
              </tr>
              <tr className="hover:bg-surface-container-high/60 transition-colors">
                <td className="py-3 text-on-surface-variant">17:28:12</td>
                <td className="py-3 text-tertiary font-bold">ROUTE_UPDATE</td>
                <td className="py-3 text-on-surface">SYSTEM_AUTO</td>
                <td className="py-3 text-on-surface">CV-047 Delay Recorded (+4h 20m)</td>
              </tr>
            </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
