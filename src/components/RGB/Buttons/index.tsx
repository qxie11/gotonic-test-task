import React from 'react';
import { Button } from 'antd';
import { IRGB } from './../../../types/index';

type Props = {
  onSubmit: any
}

const Buttons: React.FC<Props> = ({ onSubmit }) => {
  return (
    <div>
      <Button type="primary">Cancel</Button>
      <Button type="primary" onClick={onSubmit}>Submit</Button>
    </div>
  )
}

export default React.memo(Buttons);
