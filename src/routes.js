import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainLayout from './hoc/mainLayout';
import Home from './components/home';
import Contact from './components/contact';
import Header from './components/header';
import Post from './components/posts';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainLayout>
                <Switch>
                    <Route path="/post/:id" component={ Post }></Route>
                    <Route path="/contact" component={ Contact }></Route>
                    <Route path="/" component={ Home }></Route>
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Routes;