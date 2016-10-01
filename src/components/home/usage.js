/* eslint "react/no-danger": 0 */

import React, {Component} from 'react';
import marked from '../../marked';

export default class Usage extends Component {
  constructor() {
    super();
    const content = `
## Usage
### Direct download
We provide a download page where you simply have to click on the options you want. At the bottom of the page, your archive will be available.

[Download page of Fountain](/download)
### As a standard Yeoman generator
Fountain is used as all Yeoman generators. You need to have Node and NPM installed and use them to install the \`yo\` command line interface and the generator itself.
\`\`\`bash
$ npm install -g yo generator-fountain-webapp
\`\`\`
Once the dependencies installed, simply launch the generator and answer the questions.
\`\`\`bash
$ yo fountain-webapp
\`\`\`
`;
    this.markup = marked(content);
  }

  render() {
    return (
      <div className="container" dangerouslySetInnerHTML={{__html: this.markup}}></div>
    );
  }
}
