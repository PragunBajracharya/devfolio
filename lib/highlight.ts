// ============================================================
//  A tiny from-scratch syntax highlighter (per-line, robust).
//  Returns HTML strings consumed via dangerouslySetInnerHTML.
// ============================================================

const KEYWORDS = new Set([
  "const", "let", "var", "function", "return", "export", "import", "from",
  "default", "interface", "type", "new", "if", "else", "for", "while",
  "class", "extends", "true", "false", "null", "undefined", "async",
  "await", "this",
]);

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function hlMd(line: string): string {
  let e = esc(line);
  if (/^#{1,6}\s/.test(line)) return `<span class="t-md-h">${e}</span>`;
  if (/^>\s/.test(line)) return `<span class="t-com">${e}</span>`;
  if (/^\\?`{3}/.test(line)) return `<span class="t-punc">${e}</span>`;
  if (/^\s*[-*]\s/.test(line))
    e = e.replace(/^(\s*[-*])\s/, '<span class="t-punc">$1</span> ');
  e = e.replace(/\*\*([^*]+)\*\*/g, '<span class="t-md-b">**$1**</span>');
  e = e.replace(/`([^`]+)`/g, '<span class="t-str">`$1`</span>');
  e = e.replace(/(-&gt;|\/\S+|@\w+)/g, '<span class="t-md-link">$1</span>');
  return e || "&nbsp;";
}

export function hlLine(line: string, lang: string): string {
  if (lang === "Markdown") return hlMd(line);

  const re =
    /(\/\/[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b\d+\.?\d*\b)|([A-Za-z_$][\w$]*)|([{}\[\]();,.:=<>/+\-*?&|!])/g;

  let m: RegExpExecArray | null;
  let last = 0;
  let res = "";
  while ((m = re.exec(line))) {
    res += esc(line.slice(last, m.index));
    if (m[1]) res += `<span class="t-com">${esc(m[1])}</span>`;
    else if (m[2]) res += `<span class="t-str">${esc(m[2])}</span>`;
    else if (m[3]) res += `<span class="t-num">${esc(m[3])}</span>`;
    else if (m[4]) {
      const w = m[4];
      const after = line.slice(re.lastIndex).match(/^\s*[:(]/);
      if (KEYWORDS.has(w)) res += `<span class="t-kw">${w}</span>`;
      else if (w === "true" || w === "false" || w === "null")
        res += `<span class="t-bool">${w}</span>`;
      else if (after && after[0].trim() === ":")
        res += `<span class="t-prop">${w}</span>`;
      else if (after && after[0].trim() === "(")
        res += `<span class="t-fn">${w}</span>`;
      else res += esc(w);
    } else if (m[5]) res += `<span class="t-punc">${esc(m[5])}</span>`;
    last = re.lastIndex;
  }
  res += esc(line.slice(last));
  return res || "&nbsp;";
}
