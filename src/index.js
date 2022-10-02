import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Spinner from './components/Spinner';

const form = lazy(() => import('./components/Formic'));
const app = lazy(() => import('./App'));

// import './fonts/ROCK.TFF';
// import './fonts/rockB.tff';


ReactDOM.render(
  <React.StrictMode>


   
    <BrowserRouter>
    <Suspense fallback={<Spinner/>}>
    <Switch>
    <Route exact path="/" component={app}/>
    <Route path="/form" component={form} />
    </Switch>
     </Suspense>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

