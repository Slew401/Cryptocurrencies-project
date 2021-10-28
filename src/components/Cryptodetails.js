import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router'
import millify from 'millify'
import { Col, Row, Typography, Select} from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoAPI'
import Linechart from './Linechart'

const {Title, Text } = Typography; 
const { Option } = Select 


const Cryptodetails = () => {
    const { coinId } = useParams();
    const [timeperiod, setTimeperiod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data:coinHistory, isFetching:chFetching }= useGetCryptoHistoryQuery({coinId})
    const cryptoDetails = data?.data?.coin;
    console.log(cryptoDetails)
    if (isFetching) return "Loading..."
  
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  
    const stats = [
      { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
      { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
      { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <ThunderboltOutlined /> },
      { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
      { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
    ];
  
    const genericStats = [
      { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
      { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
      { title: 'Aprroved Supply', value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
      { title: 'Total Supply', value: `$ ${millify(cryptoDetails.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
      { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
    ];
    
  return (
        <div>
            <Col className = "coin-detail-container">
                <Col className = " coin-heading-container">
                    <Title className = "coin-name" level = {2}>
                        {cryptoDetails.name} ({cryptoDetails.slug})
                    </Title>
                    <p>
                        {cryptoDetails.name} Live Price in US Dollars
                        View stats and marketCap
                    </p>
                </Col>
                <Select defaultValue = "7d"
                 className = "select-timeperiod" 
                 placeholder = "Set Time Period" 
                 onChange = {(value) => setTimeperiod(value)} > 
                    {time.map((date) => <Option key = {date}> {date} </Option>)}
                 </Select>
                 <Linechart coinHistory = {coinHistory} currentPrice = {millify(cryptoDetails.Price)} coinName = {cryptoDetails.name}/>
                 <Col className = "stats-container">
                     <Col className = "coin-value-statistics">
                        <Col className = "coin-value-statistics-heading">
                            <Title level = {3} className = "coin-details-heading">
                                {Cryptodetails.name} Value and statistics
                            </Title>
                            <p> An overview of all relevant Coin statistics</p>
                        </Col>
                        {stats.map(({ icon, title, value}) => (
                            <Col className = "coin-stats">
                                <Col className = "coin-stats-name">
                                    <Text>{icon}</Text>
                                    <Text>{title}</Text>   
                                </Col>
                                <text className = "stats">{value}</text>
                            </Col>
                        ))}
                     </Col>
                     <Col className = "coin-value-statistics">
                        <Col className = "coin-value-statistics-heading">
                            <Title level = {3} className = "coin-details-heading">
                                Other statistics
                            </Title>
                            <p> Overview of General Stats</p>
                        </Col>
                        {genericStats.map(({ icon, title, value}) => (
                            <Col className = "coin-stats">
                                <Col className = "coin-stats-name">
                                    <Text>{icon}</Text>
                                    <Text>{title}</Text>   
                                </Col>
                                <text className = "stats">{value}</text>
                            </Col>
                        ))}
                     </Col>
                 </Col>
                 <Col className = "coin-desc-link">
                    <Row className = "coin-desc">
                       <Title level = {3} className = "coin-details-heading">
                           What is {cryptoDetails.name}
                           {HTMLReactParser(cryptoDetails.description)}
                       </Title>
                    </Row>
                    <Col className = "coin-links">
                        <Title level = {3} className = "coin-details-heading">Coin Links</Title>
                        {cryptoDetails.links.map((link) => (
                        <Row className = "coin-link">
                            <Title level = {3} className = "link-name"> {link.type}</Title>
                            <a href={link.url} target = "_blank" rel = "noreferrer"> {link.name}</a>
                        </Row>
                        ))}
                    </Col>
                 </Col>
            </Col>
        </div>
    )
}

export default Cryptodetails
