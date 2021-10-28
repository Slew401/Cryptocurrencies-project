import React from 'react'
import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'

const { Title } = Typography

const Linechart = ({ coinHistory, currentPrice, coinName}) => {
    return (
        <>
            <Row className = "chart-header">
                <Title level = {2} className = "chart-title">{coinName} Price Chart</Title>
                <Col>
                    <Title class = {5} className = "price-change">{coinHistory?.data?.change}</Title>
                    <Title class = {5} className = "current-price">Cuurent {coinName} Price</Title>
                </Col>
            </Row>
        </>
    )
}

export default Linechart
