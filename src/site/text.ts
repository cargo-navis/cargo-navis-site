// Keep hyphenated words together in headings („PDF-a” broke into „PDF-” / „a”). Copy is ours, so set:html is fine.
export const keepHyphens = (text: string) =>
  text.replace(/(\S+-\S+)/g, '<span class="whitespace-nowrap">$1</span>');
