import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'; 

import { useGetCryptosQuery } from '../services/cryptoAPI';

const { Title } = Typography; 

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(); 
    const globalStats = data?.data?.stats;
    console.log(globalStats);
    return (
        <div>
            <Title level = {2} className = "heading"> Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title = "Total CryptoCurrencies" value = {globalStats.total}/></Col>
                <Col span={12}><Statistic title = "Total Exchanges"  value = {globalStats.totalExchanges}/></Col>
                <Col span={12}><Statistic title = "Total Market Capitalisation" value = {globalStats.totalMarketCap}/></Col>
                <Col span={12}><Statistic title = "Total 24-hour Volume" value = {globalStats.total24hVolume}/></Col>
                <Col span={12}><Statistic title = "Total Markets" value = {globalStats.totalMarkets}/></Col>
            </Row>
        </div>
    )
}

export default Homepage
