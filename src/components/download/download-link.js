import React, {Component, PropTypes} from 'react';

export default class DownloadLink extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    selection: PropTypes.array.isRequired
  }

  get fileName() {
    return this.props.options
      .map((option, i) => option.values[this.props.selection[i]].name)
      .join('-') + '.zip';
  }

  render() {
    return (
      <div className="download-link">
        <a href={this.fileName}>{this.fileName}</a>
      </div>
    );
  }
}
