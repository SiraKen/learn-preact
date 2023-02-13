import Router, { Route } from 'preact-router';
import Home from './pages';
import Page2 from './pages/page2';
import TodoPage from './pages/todo';

export function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/page2" component={Page2} />
        <Route path="/todo" component={TodoPage} />
      </Router>
    </>
  );
}
