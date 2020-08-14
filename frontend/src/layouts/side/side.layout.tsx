import React from 'react';
import {Layout, Tooltip} from 'antd';
import SideMenu from '../../components/side-menu/side-menu.component';
import * as logo from '../../assets/favicon466.ico';
import {RightSquareOutlined} from '@ant-design/icons';

import './side.styles.less';

const {Sider} = Layout;

class SideLayout extends React.Component {

    render() {
        return (
            <Sider width={249} className="sider">
                <div className="sider-header">
                    <img src={logo} alt="Icon" className="icon-img"/>
                    <div className="title">
                        <h2>Bullet Journal</h2>
                    </div>
                </div>
                <Tooltip title='Slider' placement='right'>
                    <div id='sideMenuSlider'>
                        <RightSquareOutlined/>
                    </div>
                </Tooltip>
                <SideMenu/>
            </Sider>
        );
    }
}

export default SideLayout;
