import {get, find} from 'lodash';
import React, {Component, PropTypes} from 'react';

export default class DownloadLink extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    selection: PropTypes.array.isRequired,
    releases: PropTypes.array.isRequired
  }

  getValues() {
    return this.props.options.map((option, i) => option.values[this.props.selection[i]]);
  }

  getFileName(values) {
    const keys = values.map(option => option.key);
    keys.splice(keys.length - 1, 0, keys[0] === 'angular1' ? 'uirouter' : 'router');
    return `${keys.join('-')}.zip`;
  }

  getFileUrl(name) {
    return get(find(this.props.releases, {name}), 'browser_download_url', null);
  }

  render() {
    const values = this.getValues();
    const fileName = this.getFileName(values);
    const fileUrl = this.getFileUrl(fileName);
    return (
      <div className="download">
        <a href={fileUrl}>
          <div className="download-button" onClick={this.download}>
            <div className="download-link">
              <img className="download-icon" src="/assets/imgs/download.svg"/>
              <p>{fileName}</p>
            </div>
            <div>
              <img className="download-link-icon" src="/assets/imgs/yeoman.png"/>
              <img className="download-link-icon" src="/assets/imgs/fountain.png"/>
              {values.map((option, i) => (
                <img key={i} className="download-link-icon" alt={`${option.name} Logo`} src={option.logo}/>
              ))}
            </div>
          </div>
        </a>
      </div>
    );
  }
}
