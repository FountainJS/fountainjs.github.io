import React, {Component} from 'react';
import {Tech} from './tech';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export default class Techs extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Cooked with all these awesome technologies:
        </h2>
        <div style={styles.techs}>
          {this.props.techs.map((tech, i) => (
            <Tech key={i} tech={tech}/>
          ))}
        </div>
      </div>
    );
  }
}

Techs.propTypes = {
  techs: React.PropTypes.array.isRequired
};
