/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/animation-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube006" position={[0, 0.44, 0]}>
          <mesh name="Cube004" castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials.Base} />
          <mesh name="Cube004_1" castShadow receiveShadow geometry={nodes.Cube004_1.geometry} material={materials.pad} />
          <mesh name="Cube012" castShadow receiveShadow geometry={nodes.Cube012.geometry} material={materials['TIGE ECRAN']} position={[0.02, 0.48, -10.41]} rotation={[1.84, 0, 0]}>
            <group name="écran" position={[0.23, 10.5, -3.35]} rotation={[1.31, 0, 0]} scale={[1, 0.19, 1]}>
              <mesh name="Cube022" castShadow receiveShadow geometry={nodes.Cube022.geometry} material={materials['écran noir']} />
              <mesh name="Cube022_1" castShadow receiveShadow geometry={nodes.Cube022_1.geometry} material={materials['barre ecran']} />
              <mesh name="Cube022_2" castShadow receiveShadow geometry={nodes.Cube022_2.geometry} material={materials['contour ecran']} />
              <mesh name="Cube022_3" castShadow receiveShadow geometry={nodes.Cube022_3.geometry} material={materials['arriere ecran']} />
              <mesh name="Text" castShadow receiveShadow geometry={nodes.Text.geometry} material={materials['Texte macbook']} position={[-0.09, 1.15, 10.15]} rotation={[-0.03, 0, 0]} scale={[0.7, 3.75, 0.7]} />
            </group>
          </mesh>
          <mesh name="Clavier" castShadow receiveShadow geometry={nodes.Clavier.geometry} material={materials.touche} position={[8.42, 0.42, -2.79]} scale={[1, 0.17, 1]} />
          <mesh name="Cube" castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['contour ecran']} position={[15.21, 0.31, -8.6]} scale={0.18} />
          <mesh name="Cube001" castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials['contour ecran']} position={[15.26, 0.3, -7.15]} scale={0.14} />
          <mesh name="Cube003" castShadow receiveShadow geometry={nodes.Cube003.geometry} material={materials['contour ecran']} position={[15.26, 0.3, -6.03]} scale={0.14} />
          <mesh name="Cube004_2" castShadow receiveShadow geometry={nodes.Cube004_2.geometry} material={materials['contour ecran']} position={[-15.26, 0.3, -7.31]} scale={0.14} />
          <mesh name="Cube005" castShadow receiveShadow geometry={nodes.Cube005.geometry} material={materials['contour ecran']} position={[-15.26, 0.3, -6.14]} scale={0.14} />
          <mesh name="Cube007" castShadow receiveShadow geometry={nodes.Cube007.geometry} material={materials.Base} position={[15.23, 0.3, -6.31]} rotation={[-Math.PI, 0, 0]} scale={[0.1, 0.02, 0.23]} />
          <mesh name="Cube008" castShadow receiveShadow geometry={nodes.Cube008.geometry} material={materials.Base} position={[15.23, 0.3, -7.43]} rotation={[-Math.PI, 0, 0]} scale={[0.1, 0.02, 0.23]} />
          <mesh name="Cube009" castShadow receiveShadow geometry={nodes.Cube009.geometry} material={materials.Base} position={[-15.26, 0.3, -6.41]} rotation={[-Math.PI, 0, 0]} scale={[0.1, 0.02, 0.23]} />
          <mesh name="Cube010" castShadow receiveShadow geometry={nodes.Cube010.geometry} material={materials.Base} position={[-15.26, 0.3, -7.58]} rotation={[-Math.PI, 0, 0]} scale={[0.1, 0.02, 0.23]} />
          <mesh name="Cube013" castShadow receiveShadow geometry={nodes.Cube013.geometry} material={nodes.Cube013.material} position={[-11.04, 0.63, -7.39]} rotation={[0, -Math.PI / 4, 0]} scale={0.09} />
          <mesh name="Plane" castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials.trous} position={[14.25, 0.65, -2.93]} />
          <mesh name="Plane001" castShadow receiveShadow geometry={nodes.Plane001.geometry} material={materials.trous} position={[-13.14, 0.64, -2.93]} />
          <mesh name="tactile" castShadow receiveShadow geometry={nodes.tactile.geometry} material={materials.touche} position={[0.04, 0.51, -7.57]} />
          <mesh name="tactile001" castShadow receiveShadow geometry={nodes.tactile001.geometry} material={materials.touche} position={[0.71, 0.52, -7.57]} scale={[0.93, 0.98, 0.75]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/animation-transformed.glb')
