import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

import './index.less';

export default function PageHome() {
  return (
    <div className="page-home">
      <h2>这是首页</h2>

      <ul>
        <li>
          <NavLink to="/help">帮助页</NavLink>
        </li>
      </ul>

      <div className="test">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </div>
    </div>
  );
}
