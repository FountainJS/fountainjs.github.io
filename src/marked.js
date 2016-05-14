import marked from 'marked';
import Prism from 'prismjs';

const renderer = new marked.Renderer();

renderer.code = (code, lang) => {
  const highlighted = Prism.highlight(code, Prism.languages[lang]);
  return `<pre class="language-${lang}"><code>${highlighted}</code></pre>`;
};

export default content => marked(content, {renderer});
