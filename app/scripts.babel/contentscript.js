/**
   * クリップボードに保存する
   * 気持ち悪いが一旦 texterea を作って値を選択したものを格納している
   * execCommand API の今後に期待
   * @param {*String} text 
   */
const sevaToClipboard = text => {
  const textArea = document.createElement('textarea');
  // display: none とかにしちゃダメ
  textArea.style.cssText = 'position:absolute;left:-100%';
  document.body.appendChild(textArea);
  textArea.value = text;
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};

/**
 * Diff から - 行を除去 + 行の + だけ除去してくれる
 * https://github.com/howdy39/q-accelerator の実装を大いに参考にさせてもらった
 * @param {String} code
 */
const parseDiffCode = code => {
  const lines = code.split('\n');
  const MINUS_REGEXP = /^-+.*$/;
  const PLUS_REGEXP = /^\++(.*$)/;

  const newLines = lines
    .filter(line => !MINUS_REGEXP.test(line))
    .map(line => {
      if (!PLUS_REGEXP.test(line)) return line;

      const [, newLine] = line.match(/^\++(.*$)/);
      return newLine;
    });
  return newLines.join('\n');
};

/**
 * gitbook でビルドした http://localhost:d{4}/packages/ などの element 構成が前提
 */
(() => {
  const preElements = document.querySelectorAll('pre');
  for (let preElement of preElements) {
    const code = preElement.querySelector('code');

    const svg = document.createElement('img');
    svg.src = chrome.extension.getURL('images/clippy.svg');
    svg.style.maxHeight = '16px';
    svg.alt = 'Copy to clipboard';

    const button = document.createElement('button');
    button.appendChild(svg);
    button.style.float = 'right';
    preElement.insertBefore(button, code);

    button.onclick = () => {
      const content = preElement.textContent;
      const code = parseDiffCode(content);
      console.log(code);
      sevaToClipboard(code);
    };
  }
})();