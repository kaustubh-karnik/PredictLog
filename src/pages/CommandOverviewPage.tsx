import commandOverviewHtml from '../content/command-overview.html?raw';
import { HtmlPageContent } from '../components/HtmlPageContent';
import { setupCommandOverviewEffects } from '../hooks/usePageEffects';

export function CommandOverviewPage() {
  return (
    <HtmlPageContent html={commandOverviewHtml} setup={setupCommandOverviewEffects} />
  );
}
