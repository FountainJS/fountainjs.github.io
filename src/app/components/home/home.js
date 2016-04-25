import React, {Component} from 'react';
import Title from './title';
import Techs from '../../redux/containers/containers';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Title/>
        <Techs/>
      </div>
    );
  }
}
