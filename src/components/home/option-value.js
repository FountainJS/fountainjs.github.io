import React, {Component, PropTypes} from 'react';

export default class OptionValue extends Component {
  constructor() {
    super();
    this.select = this.select.bind(this);
  }

  select() {
    return this.props.select(this.props.option, this.props.value);
  }

  render() {
    const {active, name, logo} = this.props;
    const classes = ['option-value'];
    if (active) {
      classes.push('active');
    }
    return (
      <div className={classes.join(' ')} onClick={this.select}>
        <div className="option-logo">
          <img alt={`${name} Logo`} src={logo}/>
          <p className="option-name">{name}</p>
        </div>
      </div>
    );
  }
}

OptionValue.propTypes = {
  option: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  select: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};
