export function HelpPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none pb-12">
      <div className="bg-surface-container-low px-space-lg py-2 flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">MANUAL / HELP</span>
          </div>
        </div>
      </div>
      <div className="p-space-lg">
        <div className="max-w-3xl bg-surface-container border border-outline-variant/30 p-space-md">
           <h3 className="font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface font-semibold mb-4 border-b border-outline-variant/20 pb-2">Operator's Manual</h3>
           <div className="space-y-4">
             <p className="font-body-md text-body-md text-on-surface-variant">
               Welcome to the PREDICTLOG Bharat Sustainment Grid Simulation Environment.
             </p>
             <p className="font-body-md text-body-md text-on-surface-variant">
               This system provides high-fidelity logistical forecasting and real-time transit tracking.
             </p>
             <ul className="list-disc pl-5 font-body-sm text-body-sm text-on-surface-variant space-y-2 mt-4">
               <li><strong>Command Overview:</strong> High-level tactical KPI dashboard and map.</li>
               <li><strong>Shortfall Watch:</strong> Prioritized alerts for node depletions.</li>
               <li><strong>Forward Supply Map:</strong> Deep-dive into regional transit corridors.</li>
               <li><strong>COA Planner:</strong> Generate Course of Action alternatives for bottlenecks.</li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
