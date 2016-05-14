import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';

const renderer = new marked.Renderer();

renderer.code = (code, lang) => {
  const language = Prism.languages[lang ? lang : 'bash'];
  const highlighted = Prism.highlight(code, language);
  return `<pre class="language-${lang}"><code>${highlighted}</code></pre>`;
};

export default content => marked(content, {renderer});
