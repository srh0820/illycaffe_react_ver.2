import React from 'react';
import ReactDOM from 'react-dom/client';
import{ Routes, Route, BrowserRouter} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './component/scss/common.scss';

import 'swiper/css';
import 'swiper/css/autoplay';

import Hd from './component/Hd'
import Illy from './illy';
import Ft from './component/Ft'
import Quick from './component/Quick';
import Subpage from './component/subpage/Subpage'
import ScrollToTop from './component/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ScrollToTop />    
        <Hd />
        <Routes>
            <Route 
              path="/" 
              element={<> <Illy /><Quick /> </>} />
            <Route path="*" element={<Subpage />} />
        </Routes>
        <Ft />
    </BrowserRouter>
);