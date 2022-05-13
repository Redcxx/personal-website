/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/BlackHole.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="Black_Hole">
          <group name="Disks_(animated)" position={[0, -0.5, 0]} rotation={[0, 0.24, 0]}>
            <mesh name="Disk_(illuminance)_" castShadow receiveShadow geometry={nodes['Disk_(illuminance)_'].geometry} material={materials.illuminance} position={[0, 0.5, 0]} rotation={[0, 0.41, 0]} />
            <mesh name="Disk1_(illuminance1)" castShadow receiveShadow geometry={nodes['Disk1_(illuminance1)'].geometry} material={materials['illuminance.1']} position={[0, -0.5, 0]} />
          </group>
          <mesh name="Torus_(refraction)" castShadow receiveShadow geometry={nodes['Torus_(refraction)'].geometry} material={materials.refractio} />
          <mesh name="Sphere_(black)" castShadow receiveShadow geometry={nodes['Sphere_(black)'].geometry} material={materials.black} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/BlackHole.gltf')