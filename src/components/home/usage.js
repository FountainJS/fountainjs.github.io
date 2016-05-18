/* eslint "react/no-danger": 0 */

import React, {Component} from 'react';
import marked from '../../marked';

export default class Usage extends Component {
  constructor() {
    super();
    const content = `
## Usage
Fountain is used as all Yeoman generators. You need no have Node and NPM installed and use them to install the \`yo\` command line interface and the generator itself.
\`\`\`bash
$ npm install -g yo generator-fountain-webapp
\`\`\`
Once the dependencies installed, simply launch the generator and answer to the questions.
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
