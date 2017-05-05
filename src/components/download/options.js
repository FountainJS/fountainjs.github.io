import React, {Component, PropTypes} from 'react';
import Option from './option';
import DownloadLink from './download-link';

export default class Options extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    selection: PropTypes.array.isRequired,
    releases: PropTypes.array.isRequired,
    select: PropTypes.func.isRequired
  }

  render() {
    const {options, selection, select} = this.props;
    return (
      <div className="options container">
        <h2>Choose your technologies</h2>
        <p>{`Choose your technologies here by clicking on the one you want. You'll be able to download the generated seed project when you have selected one of each.`}</p>
        <p>Fountain lets you choose among all the most popular technologies both for your development framework and your tooling.</p>
        <p>These choices are very structurant so choose them carefully but freely: Fountain will be able to generate a fully configured and working project whatever the options you choose.</p>
        {options.map((option, i) => <Option key={i} option={i} selected={selection[i]} select={select} {...option}/>)}
        <h2>Download your seed project</h2>
        {
          selection.filter(x => x >= 0).length === options.length ?
            <DownloadLink options={this.props.options} selection={this.props.selection} releases={this.props.releases}/> :
            <p>Simply click on a logo of each category. When you would have chosen one of each, the release archive will appear here.</p>
        }
      </div>
    );
  }
}
