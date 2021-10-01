import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'; 

const { Title } = Typography; 

const Homepage = () => {
    return (
        <div>
            <Title level = {2} className = "heading"> Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title = "Total CryptoCurrencies" value = "1000"/></Col>
                <Col span={12}><Statistic title = "Total Exchanges" value = " 100"/></Col>
                <Col span={12}><Statistic title = "Total Market Capitalisation" value = "1.5 Trillion"/></Col>
                <Col span={12}><Statistic title = "Total 24-hour Volume" value = "100 Billion"/></Col>
                <Col span={12}><Statistic title = "Total Markets" value = "China Sucks"/></Col>
            </Row>
        </div>
    )
}

export default Homepage
