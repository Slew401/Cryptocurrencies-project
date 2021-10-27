import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router'
import millify from 'millify'
import { Col, Row, Typography, Select} from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoAPI'

const {Title, Text } = Typography; 
const { Option } = Select 


const Cryptodetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState(); 
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId); 
    const Cryptodetails = data?.data?.coin;
    
    console.log(Cryptodetails)
    
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    // const stats = [
    //     { title: 'Price to USD', value: `$ ${Cryptodetails.price && millify(Cryptodetails?.price)}`, icon: <DollarCircleOutlined /> },
    //     { title: 'Rank', value: Cryptodetails.rank, icon: <NumberOutlined /> },
    //     { title: '24h Volume', value: `$ ${Cryptodetails.volume && millify(Cryptodetails.volume)}`, icon: <ThunderboltOutlined /> },
    //     { title: 'Market Cap', value: `$ ${Cryptodetails.marketCap && millify(Cryptodetails.marketCap)}`, icon: <DollarCircleOutlined /> },
    //     { title: 'All-time-high(daily avg.)', value: `$ ${millify(Cryptodetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
    //   ];
    
    //   const genericStats = [
    //     { title: 'Number Of Markets', value: Cryptodetails.numberOfMarkets, icon: <FundOutlined /> },
    //     { title: 'Number Of Exchanges', value: Cryptodetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    //     { title: 'Aprroved Supply', value: Cryptodetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    //     { title: 'Total Supply', value: `$ ${millify(Cryptodetails.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
    //     { title: 'Circulating Supply', value: `$ ${millify(Cryptodetails.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
    //   ]; 
    
  return (
        <div>
            <Col className = "coin-detail-container">
                <Col className = " coin-heading-container">
                    <Title className = "coin-name" level = {2}></Title>
                </Col>
            </Col>
        </div>
    )
}

export default Cryptodetails
