import React, {Component} from 'react';

export default class Tagline extends Component {
  render() {
    return (
      <div className="container">
        <h2>What's Fountain</h2>
        <a href="http://yeoman.io" target="_blank">
          <img alt="Yeoman Logo" className="yeoman-logo" src="/assets/imgs/yeoman.png"/>
        </a>
        <h3>Options</h3>
        <p>Fountain is a new Yeoman generator allowing the user to choose the most structurant technologies you'll use:</p>
        <ul>
          <li>Web framework</li>
          <li>Module and dependency management</li>
          <li>JavaScript version</li>
          <li>Style (CSS) meta-language</li>
        </ul>
        <h3>Developer eXperience</h3>
        <p>The tooling proposed is focused on offering the best developer experience in order that modern Web development benefits from the extremly dynamic ecosystem instead of creating fatigue.</p>
        <h3>Ready to go</h3>
        <p>The main point of Fountain is to deliver a stable project whatever the very different options that you could choose and always keep up to date with last versions of every frameworks and tools.</p>
        <h3>Composition</h3>
        <p>From the user point of view, Fountain is a very complete generator. From the inside, it's a complete ecosystem of various and specialized generators. This architecture will allow easier development and extension.</p>
      </div>
    );
  }
}
