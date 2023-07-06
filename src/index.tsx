import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import reportWebVitals from './reportWebVitals';
import Header from './common/header/header-component';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import BlogComponent from './blog/blog-component';
import AboutUsComponent from './About-us/AboutUs-component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<Router>
<Header/>
  <Routes>
    <Route key={1} path = "/" element={<App/>}></Route>
    <Route key={2} path = "/blog" element={<BlogComponent/>}></Route>
    <Route key={3} path = "/about-us" element={<AboutUsComponent/>}></Route>

  </Routes>
</Router>

    <App />
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
