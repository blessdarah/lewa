import { Link } from "@inertiajs/react";
import React from "react";
import { ConfigProvider } from 'antd'
import '../../css/app.css'

const AppLayout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AppLayout;
