import React from 'react'
import {LineStyleOutlined , TimelineOutlined ,TrendingUpOutlined ,PersonOutlineOutlined,ProductionQuantityLimitsOutlined,AttachMoneyOutlined,
    BarChartOutlined ,EmailOutlined,ForumOutlined, ChatBubbleOutlineOutlined,ManageSearchOutlined,BugReportOutlined
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
        <div className="sidebarwrap px-4 w-[20%] ">
            <div className="sidebarmenu ">
                <h3 className="sidebartittle"> Dashboard
                </h3>
                <ul className="sidebarlist p-2 ">
                    <Link className="sidebarl m-[7px] flex gap-3 active:bg-[lightgray]  cursor-pointer p-1 rounded"  to ="/">
                        <LineStyleOutlined className=''/>
                        Home 
                    </Link>
                    <li className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded">
                        <TimelineOutlined />
                        Analytics
                    </li>
                    <li className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded">
                        <TrendingUpOutlined/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebartittle"> Quick Menu
                </h3>
                <ul className="sidebarlist p-2">
                <Link className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded"  to ="/users">
                        <PersonOutlineOutlined/>
                        Users
                    </Link>
                    <Link className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded" to="/products">
                        <ProductionQuantityLimitsOutlined/>
                        Products
                    </Link>
                    <li className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded">
                        <AttachMoneyOutlined/>
                        Transactions
                    </li>
                    <li className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded">
                        <BarChartOutlined/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebartittle"> Notifications
                </h3>
                <ul className="sidebarlist p-2">
                <li className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded">
                        <EmailOutlined/>
                        Mail
                    </li>
                    <li className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded">
                        <ForumOutlined/>
                        Feadback
                    </li>
                    <li className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded">
                        <ChatBubbleOutlineOutlined/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebartittle"> Staff
                </h3>
                <ul className="sidebarlist p-2">
                <li className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded">
                        <ManageSearchOutlined/>
                        Manage
                    </li>
                    <li className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded">
                        <TimelineOutlined/>
                        Feedback
                    </li>
                    <li className="sidebarl m-[7px] flex gap-3 hover:bg-[lightgray]  cursor-pointer p-1 rounded">
                        <BugReportOutlined/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    
  )
}

export default Sidebar




