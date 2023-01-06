import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';

export const App = () => {
  return (
    <Canvas>
      <Sky sunPosition={[20, 100, 20]} />
      {/* eslint-disable-next-line react/no-unknown-property*/}
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};
