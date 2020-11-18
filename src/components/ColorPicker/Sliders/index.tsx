import React, { useState, useCallback } from 'react';
import { Slider } from 'antd';
import { IRGB } from './../../../types/index';
import Buttons from './Buttons';
import { initialColor } from '../../../constans';

type Props = {
  setCurrentColor: (rgb: IRGB) => void
}

const Sliders: React.FC<Props> = ({ setCurrentColor }) => {
  const [rgb, setRGB] = useState<IRGB>(initialColor);
  const [isSliders, setSliders] = useState<boolean>(true);

  const onR = (value: number) => setRGB({ ...rgb, R: value });

  const onG = (value: number) => setRGB({ ...rgb, G: value });

  const onB = (value: number) => setRGB({ ...rgb, B: value });

  const onSlidersBlockToggle = useCallback(() => setSliders(!isSliders), [isSliders]);

  const onSubmit = useCallback(() => { setCurrentColor(rgb) }, [setCurrentColor, rgb]);

  const onCancel = useCallback(() => {
    onSlidersBlockToggle();
    setCurrentColor(initialColor);
    setRGB(initialColor);
  }, [setCurrentColor, onSlidersBlockToggle]);

  return (
    <div className="sliders">
      {isSliders && <>
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
      </>}
      <Buttons
        onSubmit={onSubmit}
        onCancel={onCancel} />
    </div>
  )
}

export default Sliders;
