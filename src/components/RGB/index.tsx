import React, { useState } from 'react'
import Area from './Area/index';
import Sliders from './Sliders/index';
import { IRGB } from './../../types/index';
import { initialColor } from '../../constans';

const RGB: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<IRGB>(initialColor);

  return (
    <div>
      <Area currentColor={currentColor} />
      <Sliders setCurrentColor={setCurrentColor} />
    </div>
  );
}

export default RGB;
