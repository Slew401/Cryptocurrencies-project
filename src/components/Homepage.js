import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'; 

import { useGetCryptosQuery } from '../services/cryptoAPI';
import { Cryptocurrencies, News} from "../components"; 
const { Title } = Typography; 

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10); 
    const globalStats = data?.data?.stats;
    console.log(globalStats);

    if(isFetching) return "Loading...."

    return (
        <div>
            <Title level = {2} className = "heading"> Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title = "Total CryptoCurrencies" value = {globalStats.total}/></Col>
                <Col span={12}><Statistic title = "Total Exchanges"  value = {millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title = "Total Market Capitalisation" value = {millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title = "Total 24-hour Volume" value ={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title = "Total Markets" value = {globalStats.totalMarkets}/></Col>
            </Row>
            <div className = "home-heading-container">
                <Title level = {2} className = "home-title"> Top 10 Cryptos in the World!</Title>
                <Title level = {3} className = "show-more"> <Link to="/cryptocurrencies" > Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified = {( true )}/>
            <div className = "home-heading-container">
                <Title level = {2} className = "home-title"> News Section</Title>
                <Title level = {3} className = "show-more"> <Link to="/news" > Show More</Link></Title>
            </div>
            <News simplified = {(true)}/> 
        </div>
    )
}

export default Homepage
