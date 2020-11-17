import React, { useState, useCallback, useMemo } from 'react'
import Area from './Area/index';
import Sliders from './Sliders/index';
import Buttons from './Buttons/index';
import { IRGB } from './../../types/index';

const RGB: React.FC = () => {
  const [rgb, setRGB] = useState<IRGB>
    ({
      R: 0,
      G: 0,
      B: 0
    });

  const [currentColor, setCurrentColor] = useState<IRGB>
    ({
      R: 0,
      G: 0,
      B: 0
    });

  const mSetCurrentColor = useMemo(() => currentColor, [currentColor])

  const onSubmit = useCallback(() => setCurrentColor(rgb), [rgb, setCurrentColor]);

  return (
    <div>
      <Area mSetCurrentColor={mSetCurrentColor} />
      <Sliders
        rgb={rgb}
        setRGB={setRGB} />
      <Buttons onSubmit={onSubmit} />
    </div>
  );
}

export default RGB;
