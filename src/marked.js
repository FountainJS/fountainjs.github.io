import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';

const renderer = new marked.Renderer();

renderer.code = (code, lang) => {
  lang = lang === 'sh' ? 'bash' : lang;
  const language = Prism.languages[lang ? lang : 'bash'];
  if (!language) {
    console.error(`lang ${lang} not loaded in prism`);
  }
  const highlighted = Prism.highlight(code, language);
  return `<pre class="language-${lang}"><code>${highlighted}</code></pre>`;
};

export default content => marked(content, {renderer});
