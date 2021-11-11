import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {NavBar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './components'

import './App.css';

const App = () => {
    return (
        <div className ="app">
            <div className = "navbar">
                <NavBar/>
            </div>
    
            <div className = "main"> 
                <Layout>
                    <div className = "routes">
                        <Routes>
                            <Route path = "/" element={<HomePage/>}/>
                            <Route path = "/exchanges" element={<Exchanges/>}/>
                            <Route path = "/cryptocurrencies" element={<Cryptocurrencies/>}/>
                            <Route path = "/crypto/:coinId" element={<CryptoDetails/>}/>
                        </Routes>
                    </div>
                </Layout>
            

            <div className ="footer">
                <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                    Cryptosphere <br/>
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to ="/news">News</Link>
                </Space>
            </div>

            </div>
        </div>
    )
}

export default App
