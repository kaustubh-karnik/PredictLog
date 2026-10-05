import forwardSupplyMapHtml from '../content/forward-supply-map.html?raw';
import { HtmlPageContent } from '../components/HtmlPageContent';
import { setupForwardSupplyMapEffects } from '../hooks/usePageEffects';

export function ForwardSupplyMapPage() {
  return (
    <HtmlPageContent html={forwardSupplyMapHtml} setup={setupForwardSupplyMapEffects} />
  );
}
