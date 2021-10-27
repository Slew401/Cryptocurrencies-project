import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Container } from "react-bootstrap"; 

import { Navbar, Cryptodetails, Cryptocurrencies, News, Exchanges, Homepage } from "./components"; 
import "./App.css";

const App = () => {
    return (
        <div className = "app">
            <div className = "navbar">
                <Navbar/>
            </div>
            <div className = "main">
                <Layout>
                    <div className = "routes">
                        <Switch>
                            <Route exact path = "/">
                                <Homepage/>
                            </Route>
                            <Route exact path = "/exchanges">
                                <Exchanges/>
                            </Route>
                            <Route exact path = "/cryptocurrencies">
                                <Cryptocurrencies/>
                            </Route>
                            <Route exact path = "/crypto/:coinId">
                                <Cryptodetails/>
                            </Route>
                            <Route exact path = "/news">
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className = "footer">
                    <Typography.Title level={5} style={{ color: 'White', textAlign: 'center' }}>
                        CryptoChecker <br/>
                        All Rights Reserved
                    </Typography.Title>
                    <Space>
                        <Link to ="/">Home</Link>
                        <Link to = "/exchanges">Exchanges</Link>
                        <Link to = "/News">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
