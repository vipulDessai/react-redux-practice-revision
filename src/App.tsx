import React from 'react';
import { Redirect, Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { PostsComponent } from './Posts';
import {HomeComponent} from './Home';
import { CLassyComponent } from './ClassyComponent/ClassyComponent';
import { FunctionalComponent } from './FunctioningComponent/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <section>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/classy">Classy</Link>
      <Link to="/functional">Functional</Link>
      </section>
      <section>
      <Switch>
        <Route exact path="/" component={HomeComponent}></Route>
        <Route path="/posts" component={PostsComponent}></Route>
        <Route path="/classy" component={(props: any) => <CLassyComponent {...props} foo={'foo'} />}></Route>
        <Route path="/functional" component={(props: any) => <FunctionalComponent {...props} foo={'foo'} />}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
      </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
