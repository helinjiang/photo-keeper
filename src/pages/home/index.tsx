import React from 'react';
import { Button } from 'antd';

import './index.less';

export default function PageHome() {
  return (
    <div className="page-home">
      <h2>hello, home</h2>
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
