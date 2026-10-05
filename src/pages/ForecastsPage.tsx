export function ForecastsPage() {
  return (
    <div className="flex flex-col w-full text-on-surface select-none pb-12">
      <div className="bg-surface-container-low px-space-lg py-2 flex flex-wrap items-center justify-between gap-space-sm border-b border-outline-variant/30">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">FORECASTS</span>
          </div>
          <span className="text-outline-variant">/</span>
          <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant">
            <span>Global</span>
            <span className="text-outline-variant">›</span>
            <span className="text-primary font-medium">Predictive Analytics</span>
          </div>
        </div>
      </div>
      <div className="p-space-lg">
        <div className="bg-surface-container-low border border-outline-variant/30 p-space-md min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-[48px] text-primary mb-4">trending_up</span>
            <h3 className="font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface font-semibold">Demand Forecasting Module Active</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2 mx-auto">
              Running stochastic models for P50 and P90 confidence intervals across all supply classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
