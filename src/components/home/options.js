import React, {Component, PropTypes} from 'react';
import Option from './option';

export default class Options extends Component {
  render() {
    const {options, selection, select} = this.props;
    return (
      <div className="options container">
        <h2>Choose your technologies</h2>
        <p>Fountain lets you choose among all the most popular technologies both for your development framework and your tooling.</p>
        <p>These choices are very structurant so choose them carefully but freely: Fountain will be able to generate a fully configured and working project whatever the options you choose.</p>
        {options.map((option, i) => <Option key={i} option={i} selected={selection[i]} select={select} {...option}/>)}
      </div>
    );
  }
}

Options.propTypes = {
  options: PropTypes.array.isRequired,
  selection: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired
};
