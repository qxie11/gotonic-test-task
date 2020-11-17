import React, { useState } from 'react';
import { Slider } from 'antd';
import { IRGB } from './../../../types/index';

type Props = {
  rgb: IRGB,
  setRGB: any,
}

const Sliders: React.FC<Props> = ({
  rgb,
  setRGB,
}) => {

  const onR = (value: number) => {
    setRGB({ ...rgb, R: value })
  };

  const onG = (value: number) => {
    setRGB({ ...rgb, G: value })
  };

  const onB = (value: number) => {
    setRGB({ ...rgb, B: value });
  };

  return (
    <div>
      <Slider
        min={0}
        max={255}
        value={typeof rgb.R === 'number' ? rgb.R : 0}
        onChange={onR} />
      <p>{rgb.R}</p>
      <Slider
        min={0}
        max={255}
        value={typeof rgb.G === 'number' ? rgb.G : 0}
        onChange={onG} />
      <p>{rgb.G}</p>
      <Slider
        min={0}
        max={255}
        value={typeof rgb.B === 'number' ? rgb.B : 0}
        onChange={onB} />
      <p>{rgb.B}</p>
    </div>
  )
}

export default Sliders;
