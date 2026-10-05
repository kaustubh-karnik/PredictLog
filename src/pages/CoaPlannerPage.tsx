import coaPlannerHtml from '../content/coa-planner.html?raw';
import { HtmlPageContent } from '../components/HtmlPageContent';

export function CoaPlannerPage() {
  return <HtmlPageContent html={coaPlannerHtml} />;
}
