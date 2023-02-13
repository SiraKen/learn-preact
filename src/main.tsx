import { render } from 'preact';
import { App } from './app';
import './assets/index.css';

render(<App />, document.getElementById('app') as HTMLElement);
