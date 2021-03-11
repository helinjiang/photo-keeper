import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

import './index.less';

export default function PageHelp() {
  return (
    <div className="page-help">
      <h2>帮助手册</h2>
      <p>这是帮助页面，说明系统怎么用。</p>

      <NavLink to={`/`}>
        <Button type="primary">返回首页</Button>
      </NavLink>
    </div>
  );
}
