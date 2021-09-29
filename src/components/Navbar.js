import React from 'react'; 
import { Avatar, Typography, Button, Menu} from "antd"; 
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectFilled, BulbOutlined, FundOutlined } from "@ant-design/icons";

const icon = require('../images/crypto.png')

const Navbar = () => {
    return (
        <div className = "nav-container">
            <div className = "logo-container">
               <Avatar src = {icon} size = "large" />
               <Typography.Title level = {2} className = "logo">
                   <Link to = "/">CryptoChecker</Link>
               </Typography.Title>
               {/*<Button className = "menu-control-container">

               </Button> */}
            </div>
            
        </div>
    )
}

export default Navbar
