import React from 'react'; 
import { Avatar, Typography, Button, Menu} from "antd"; 
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectFilled, BulbOutlined, FundOutlined, MoneyCollectOutlined } from "@ant-design/icons";

const icon = require("../images/Crypto.png"); 

const Navbar = () => {
    return (
        <div className = "nav-container">
            <div className = "logo-container">
               <Avatar src = {icon} size = "large"/>
               <Typography.Title level = {2} className = "logo">
                   <Link to = "/">CryptoChecker</Link>
               </Typography.Title>
            </div>
            <Menu theme = "Dark">
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to = "/">Home</Link>
                </Menu.Item>
                <Menu.Item icon = {<FundOutlined/>}>
                    <Link to = "/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon = {<MoneyCollectOutlined/>}>
                    <Link to = "/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon = {<BulbOutlined/>}>
                    <Link to = "/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
