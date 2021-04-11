import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './about/About';
import Blog from './blog/Blog';
import Projects from './projects/Projects';
import Resume from './resume/Resume';

export const App: React.FunctionComponent = () => {
  // const MyContext = React.createContext();
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <About />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/blogs" render={() => <Blog />} />
        <Route exact path="/projects" render={() => <Projects />} />
        <Route exact path="/resume" render={() => <Resume />} />
      </Switch>
    </main>
  );
};
