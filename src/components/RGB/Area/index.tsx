import React from 'react';
import { IRGB } from './../../../types/';

type Props = {
  mSetCurrentColor: IRGB
}

const Area: React.FC<Props> = ({ mSetCurrentColor: { R, G, B } }) => {

  const styles: React.CSSProperties = {
    backgroundColor: `rgb(${R}, ${G}, ${B})`
  }

  return (
    <div className="rgb__area" style={styles}></div>
  )
}

export default Area;
