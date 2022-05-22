/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useUpdateEffect } from "../utils/hooks";
import { playAnimation, playAnimationReverse } from '../utils/utils';

export default function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/snowball/snow_02_2k-transformed.glb')
    const { actions } = useAnimations(animations, group)


    const [oddClick, setOddClick] = useState(false);
    useUpdateEffect(() => {
        for (const animation of Object.keys(actions)) {
            if (oddClick) {
                playAnimation(actions[animation])
            } else {
                playAnimationReverse(actions[animation])
            }
        }
    }, [oddClick])

    return (
        <group ref={group} {...props} dispose={null} onClick={() => setOddClick(!oddClick)} scale={[10,10,10]}>
            <group name="Scene">
                <group name="Force" />
                <group name="Sphere_cell037" position={[-0.05, 0.49, 0.26]} />
                {/*<mesh name="Sphere" castShadow receiveShadow geometry={nodes.Sphere.geometry} material={materials.snow_02} scale={0.5} />*/}
                <mesh name="Sphere_ cell004" castShadow receiveShadow geometry={nodes.Sphere_cell004.geometry} material={materials.snow_02} position={[0.38, -0.19, -0.34]} />
                <mesh name="Sphere_cell016" castShadow receiveShadow geometry={nodes.Sphere_cell016.geometry} material={materials.snow_02} position={[0.06, 0.53, -0.1]} />
                <mesh name="Sphere_cell035" castShadow receiveShadow geometry={nodes.Sphere_cell035.geometry} material={materials.snow_02} position={[0.51, 0.12, 0.02]} />
                <mesh name="Sphere_cell038" castShadow receiveShadow geometry={nodes.Sphere_cell038.geometry} material={materials.snow_02} position={[-0.01, 0.21, 0.5]} />
                <mesh name="Sphere_cell056" castShadow receiveShadow geometry={nodes.Sphere_cell056.geometry} material={materials.snow_02} position={[-0.11, -0.28, 0.45]} />
                <mesh name="Sphere_cell098" castShadow receiveShadow geometry={nodes.Sphere_cell098.geometry} material={materials.snow_02} position={[0.11, 0.05, 0.02]} />
                <mesh name="Sphere_cell110" castShadow receiveShadow geometry={nodes.Sphere_cell110.geometry} material={materials.snow_02} position={[0.28, -0.38, -0.24]} />
                <mesh name="Sphere_cell115" castShadow receiveShadow geometry={nodes.Sphere_cell115.geometry} material={materials.snow_02} position={[0.25, -0.4, 0.27]} />
                <mesh name="Sphere_cell124" castShadow receiveShadow geometry={nodes.Sphere_cell124.geometry} material={materials.snow_02} position={[-0.25, 0.21, 0.43]} />
                <mesh name="Sphere_cell127" castShadow receiveShadow geometry={nodes.Sphere_cell127.geometry} material={materials.snow_02} position={[-0.47, 0.07, 0.23]} />
                <mesh name="Sphere_cell137" castShadow receiveShadow geometry={nodes.Sphere_cell137.geometry} material={materials.snow_02} position={[-0.2, 0.41, -0.28]} />
                <mesh name="Sphere_cell138" castShadow receiveShadow geometry={nodes.Sphere_cell138.geometry} material={materials.snow_02} position={[-0.28, 0.33, 0.33]} />
                <mesh name="Sphere_cell151" castShadow receiveShadow geometry={nodes.Sphere_cell151.geometry} material={materials.snow_02} position={[-0.2, -0.41, -0.29]} />
                <mesh name="Sphere_cell154" castShadow receiveShadow geometry={nodes.Sphere_cell154.geometry} material={materials.snow_02} position={[0.16, -0.47, 0.15]} />
                <mesh name="Sphere_cell157" castShadow receiveShadow geometry={nodes.Sphere_cell157.geometry} material={materials.snow_02} position={[0.15, -0.24, 0.07]} />
                <mesh name="Sphere_cell158" castShadow receiveShadow geometry={nodes.Sphere_cell158.geometry} material={materials.snow_02} position={[-0.13, 0.39, 0.35]} />
                <mesh name="Sphere_cell161" castShadow receiveShadow geometry={nodes.Sphere_cell161.geometry} material={materials.snow_02} position={[0.5, -0.16, 0.1]} />
                <mesh name="Sphere_cell162" castShadow receiveShadow geometry={nodes.Sphere_cell162.geometry} material={materials.snow_02} position={[0.38, -0.36, -0.12]} />
                <mesh name="Sphere_cell165" castShadow receiveShadow geometry={nodes.Sphere_cell165.geometry} material={materials.snow_02} position={[-0.03, 0.47, -0.26]} />
                <mesh name="Sphere_cell166" castShadow receiveShadow geometry={nodes.Sphere_cell166.geometry} material={materials.snow_02} position={[0.13, -0.22, 0.44]} />
                <mesh name="Sphere_cell170" castShadow receiveShadow geometry={nodes.Sphere_cell170.geometry} material={materials.snow_02} position={[-0.27, 0.4, 0.21]} />
                <mesh name="Sphere_cell173" castShadow receiveShadow geometry={nodes.Sphere_cell173.geometry} material={materials.snow_02} position={[0.4, 0.33, -0.15]} />
                <mesh name="Sphere_cell179" castShadow receiveShadow geometry={nodes.Sphere_cell179.geometry} material={materials.snow_02} position={[-0.17, -0.18, 0.19]} />
                <mesh name="Sphere_cell186" castShadow receiveShadow geometry={nodes.Sphere_cell186.geometry} material={materials.snow_02} position={[0.14, 0.32, -0.4]} />
                <mesh name="Sphere_cell188" castShadow receiveShadow geometry={nodes.Sphere_cell188.geometry} material={materials.snow_02} position={[0.23, 0.46, -0.16]} />
                <mesh name="Sphere_cell189" castShadow receiveShadow geometry={nodes.Sphere_cell189.geometry} material={materials.snow_02} position={[-0.47, -0.17, -0.07]} />
                <mesh name="Sphere_cell190" castShadow receiveShadow geometry={nodes.Sphere_cell190.geometry} material={materials.snow_02} position={[-0.41, -0.32, -0.14]} />
                <mesh name="Sphere_cell196" castShadow receiveShadow geometry={nodes.Sphere_cell196.geometry} material={materials.snow_02} position={[-0.54, -0.04, 0.04]} />
                <mesh name="Sphere_cell197" castShadow receiveShadow geometry={nodes.Sphere_cell197.geometry} material={materials.snow_02} position={[0.27, -0.46, 0]} />
                <mesh name="Sphere_cell206" castShadow receiveShadow geometry={nodes.Sphere_cell206.geometry} material={materials.snow_02} position={[0.44, 0.21, -0.24]} />
                <mesh name="Sphere_cell223" castShadow receiveShadow geometry={nodes.Sphere_cell223.geometry} material={materials.snow_02} position={[0.12, 0.2, -0.2]} />
                <mesh name="Sphere_cell231" castShadow receiveShadow geometry={nodes.Sphere_cell231.geometry} material={materials.snow_02} position={[-0.05, 0.14, -0.52]} />
                <mesh name="Sphere_cell238" castShadow receiveShadow geometry={nodes.Sphere_cell238.geometry} material={materials.snow_02} position={[0.46, 0.29, 0.13]} />
                <mesh name="Sphere_cell239" castShadow receiveShadow geometry={nodes.Sphere_cell239.geometry} material={materials.snow_02} position={[0.21, -0.27, -0.42]} />
                <mesh name="Sphere_cell242" castShadow receiveShadow geometry={nodes.Sphere_cell242.geometry} material={materials.snow_02} position={[0, 0.09, 0.19]} />
                <mesh name="Sphere_cell243" castShadow receiveShadow geometry={nodes.Sphere_cell243.geometry} material={materials.snow_02} position={[-0.55, 0.02, -0.06]} />
                <mesh name="Sphere_cell245" castShadow receiveShadow geometry={nodes.Sphere_cell245.geometry} material={materials.snow_02} position={[0.23, 0.06, 0.47]} />
                <mesh name="Sphere_cell248" castShadow receiveShadow geometry={nodes.Sphere_cell248.geometry} material={materials.snow_02} position={[-0.28, -0.45, 0.03]} />
                <mesh name="Sphere_cell251" castShadow receiveShadow geometry={nodes.Sphere_cell251.geometry} material={materials.snow_02} position={[0.43, -0.3, 0.15]} />
                <mesh name="Sphere_cell258" castShadow receiveShadow geometry={nodes.Sphere_cell258.geometry} material={materials.snow_02} position={[0.14, -0.06, -0.52]} />
                <mesh name="Sphere_cell259" castShadow receiveShadow geometry={nodes.Sphere_cell259.geometry} material={materials.snow_02} position={[0.39, -0.06, -0.02]} />
                <mesh name="Sphere_cell260" castShadow receiveShadow geometry={nodes.Sphere_cell260.geometry} material={materials.snow_02} position={[-0.14, 0.2, -0.05]} />
                <mesh name="Sphere_cell261" castShadow receiveShadow geometry={nodes.Sphere_cell261.geometry} material={materials.snow_02} position={[0.13, -0.53, -0.05]} />
                <mesh name="Sphere_cell262" castShadow receiveShadow geometry={nodes.Sphere_cell262.geometry} material={materials.snow_02} position={[-0.25, -0.47, -0.13]} />
                <mesh name="Sphere_cell263" castShadow receiveShadow geometry={nodes.Sphere_cell263.geometry} material={materials.snow_02} position={[0.25, 0.13, -0.46]} />
                <mesh name="Sphere_cell264" castShadow receiveShadow geometry={nodes.Sphere_cell264.geometry} material={materials.snow_02} position={[0.38, -0.23, 0.27]} />
                <mesh name="Sphere_cell265" castShadow receiveShadow geometry={nodes.Sphere_cell265.geometry} material={materials.snow_02} position={[0.39, 0.32, 0.22]} />
                <mesh name="Sphere_cell266" castShadow receiveShadow geometry={nodes.Sphere_cell266.geometry} material={materials.snow_02} position={[-0.1, -0.08, 0.52]} />
                <mesh name="Sphere_cell267" castShadow receiveShadow geometry={nodes.Sphere_cell267.geometry} material={materials.snow_02} position={[0.45, -0.3, -0.01]} />
                <mesh name="Sphere_cell269" castShadow receiveShadow geometry={nodes.Sphere_cell269.geometry} material={materials.snow_02} position={[0.25, 0.43, 0.25]} />
                <mesh name="Sphere_cell270" castShadow receiveShadow geometry={nodes.Sphere_cell270.geometry} material={materials.snow_02} position={[-0.24, 0.21, -0.43]} />
                <mesh name="Sphere_cell271" castShadow receiveShadow geometry={nodes.Sphere_cell271.geometry} material={materials.snow_02} position={[-0.49, 0.21, 0.06]} />
                <mesh name="Sphere_cell272" castShadow receiveShadow geometry={nodes.Sphere_cell272.geometry} material={materials.snow_02} position={[0.52, 0.08, -0.17]} />
                <mesh name="Sphere_cell273" castShadow receiveShadow geometry={nodes.Sphere_cell273.geometry} material={materials.snow_02} position={[-0.37, 0.37, -0.1]} />
                <mesh name="Sphere_cell274" castShadow receiveShadow geometry={nodes.Sphere_cell274.geometry} material={materials.snow_02} position={[0.38, -0.09, 0.38]} />
                <mesh name="Sphere_cell277" castShadow receiveShadow geometry={nodes.Sphere_cell277.geometry} material={materials.snow_02} position={[0.33, -0.09, -0.41]} />
                <mesh name="Sphere_cell282" castShadow receiveShadow geometry={nodes.Sphere_cell282.geometry} material={materials.snow_02} position={[0.43, -0.23, -0.22]} />
                <mesh name="Sphere_cell285" castShadow receiveShadow geometry={nodes.Sphere_cell285.geometry} material={materials.snow_02} position={[-0.36, 0.2, 0.33]} />
                <mesh name="Sphere_cell287" castShadow receiveShadow geometry={nodes.Sphere_cell287.geometry} material={materials.snow_02} position={[-0.15, -0.52, -0.1]} />
                <mesh name="Sphere_cell288" castShadow receiveShadow geometry={nodes.Sphere_cell288.geometry} material={materials.snow_02} position={[0.1, 0.53, 0.06]} />
                <mesh name="Sphere_cell290" castShadow receiveShadow geometry={nodes.Sphere_cell290.geometry} material={materials.snow_02} position={[0.18, -0.33, 0.4]} />
                <mesh name="Sphere_cell291" castShadow receiveShadow geometry={nodes.Sphere_cell291.geometry} material={materials.snow_02} position={[0.5, -0.05, -0.2]} />
                <mesh name="Sphere_cell292" castShadow receiveShadow geometry={nodes.Sphere_cell292.geometry} material={materials.snow_02} position={[0.09, -0.45, 0.28]} />
                <mesh name="Sphere_cell293" castShadow receiveShadow geometry={nodes.Sphere_cell293.geometry} material={materials.snow_02} position={[-0.36, -0.28, 0.29]} />
                <mesh name="Sphere_cell294" castShadow receiveShadow geometry={nodes.Sphere_cell294.geometry} material={materials.snow_02} position={[-0.11, 0.53, -0.06]} />
                <mesh name="Sphere_cell297" castShadow receiveShadow geometry={nodes.Sphere_cell297.geometry} material={materials.snow_02} position={[-0.37, -0.37, 0.01]} />
                <mesh name="Sphere_cell299" castShadow receiveShadow geometry={nodes.Sphere_cell299.geometry} material={materials.snow_02} position={[0.39, 0.12, -0.32]} />
                <mesh name="Sphere_cell300" castShadow receiveShadow geometry={nodes.Sphere_cell300.geometry} material={materials.snow_02} position={[-0.01, -0.54, 0]} />
                <mesh name="Sphere_cell302" castShadow receiveShadow geometry={nodes.Sphere_cell302.geometry} material={materials.snow_02} position={[-0.04, 0.37, -0.03]} />
                <mesh name="Sphere_cell305" castShadow receiveShadow geometry={nodes.Sphere_cell305.geometry} material={materials.snow_02} position={[0.26, -0.2, 0.44]} />
                <mesh name="Sphere_cell306" castShadow receiveShadow geometry={nodes.Sphere_cell306.geometry} material={materials.snow_02} position={[0.38, 0.37, 0.03]} />
                <mesh name="Sphere_cell307" castShadow receiveShadow geometry={nodes.Sphere_cell307.geometry} material={materials.snow_02} position={[-0.06, 0.15, 0.34]} />
                <mesh name="Sphere_cell309" castShadow receiveShadow geometry={nodes.Sphere_cell309.geometry} material={materials.snow_02} position={[0.26, 0.45, 0.15]} />
                <mesh name="Sphere_cell312" castShadow receiveShadow geometry={nodes.Sphere_cell312.geometry} material={materials.snow_02} position={[-0.08, 0.34, 0.42]} />
                <mesh name="Sphere_cell313" castShadow receiveShadow geometry={nodes.Sphere_cell313.geometry} material={materials.snow_02} position={[-0.28, 0.03, 0.45]} />
                <mesh name="Sphere_cell316" castShadow receiveShadow geometry={nodes.Sphere_cell316.geometry} material={materials.snow_02} position={[0.44, -0.16, -0.29]} />
                <mesh name="Sphere_cell317" castShadow receiveShadow geometry={nodes.Sphere_cell317.geometry} material={materials.snow_02} position={[0.14, 0.36, 0.04]} />
                <mesh name="Sphere_cell319" castShadow receiveShadow geometry={nodes.Sphere_cell319.geometry} material={materials.snow_02} position={[-0.16, -0.14, -0.08]} />
                <mesh name="Sphere_cell320" castShadow receiveShadow geometry={nodes.Sphere_cell320.geometry} material={materials.snow_02} position={[0.25, 0.3, 0.35]} />
                <mesh name="Sphere_cell321" castShadow receiveShadow geometry={nodes.Sphere_cell321.geometry} material={materials.snow_02} position={[0.02, 0.52, 0.15]} />
                <mesh name="Sphere_cell322" castShadow receiveShadow geometry={nodes.Sphere_cell322.geometry} material={materials.snow_02} position={[0.34, -0.4, 0.15]} />
                <mesh name="Sphere_cell323" castShadow receiveShadow geometry={nodes.Sphere_cell323.geometry} material={materials.snow_02} position={[-0.46, -0.1, 0.26]} />
                <mesh name="Sphere_cell324" castShadow receiveShadow geometry={nodes.Sphere_cell324.geometry} material={materials.snow_02} position={[0.4, -0.02, 0.26]} />
                <mesh name="Sphere_cell325" castShadow receiveShadow geometry={nodes.Sphere_cell325.geometry} material={materials.snow_02} position={[0.33, -0.29, 0.32]} />
                <mesh name="Sphere_cell327" castShadow receiveShadow geometry={nodes.Sphere_cell327.geometry} material={materials.snow_02} position={[-0.03, -0.21, -0.49]} />
                <mesh name="Sphere_cell328" castShadow receiveShadow geometry={nodes.Sphere_cell328.geometry} material={materials.snow_02} position={[0.09, -0.04, -0.34]} />
                <mesh name="Sphere_cell329" castShadow receiveShadow geometry={nodes.Sphere_cell329.geometry} material={materials.snow_02} position={[0.47, -0.13, 0.22]} />
                <mesh name="Sphere_cell330" castShadow receiveShadow geometry={nodes.Sphere_cell330.geometry} material={materials.snow_02} position={[-0.21, -0.48, 0.14]} />
                <mesh name="Sphere_cell331" castShadow receiveShadow geometry={nodes.Sphere_cell331.geometry} material={materials.snow_02} position={[0.32, -0.19, 0.14]} />
                <mesh name="Sphere_cell333" castShadow receiveShadow geometry={nodes.Sphere_cell333.geometry} material={materials.snow_02} position={[-0.03, -0.52, 0.16]} />
                <mesh name="Sphere_cell334" castShadow receiveShadow geometry={nodes.Sphere_cell334.geometry} material={materials.snow_02} position={[-0.47, -0.25, 0.11]} />
                <mesh name="Sphere_cell335" castShadow receiveShadow geometry={nodes.Sphere_cell335.geometry} material={materials.snow_02} position={[-0.26, -0.14, -0.42]} />
                <mesh name="Sphere_cell336" castShadow receiveShadow geometry={nodes.Sphere_cell336.geometry} material={materials.snow_02} position={[0.51, -0.19, -0.09]} />
                <mesh name="Sphere_cell337" castShadow receiveShadow geometry={nodes.Sphere_cell337.geometry} material={materials.snow_02} position={[-0.03, -0.5, -0.22]} />
                <mesh name="Sphere_cell338" castShadow receiveShadow geometry={nodes.Sphere_cell338.geometry} material={materials.snow_02} position={[0.2, 0.51, -0.02]} />
                <mesh name="Sphere_cell340" castShadow receiveShadow geometry={nodes.Sphere_cell340.geometry} material={materials.snow_02} position={[-0.38, 0.23, 0.2]} />
                <mesh name="Sphere_cell341" castShadow receiveShadow geometry={nodes.Sphere_cell341.geometry} material={materials.snow_02} position={[-0.4, 0.08, -0.33]} />
                <mesh name="Sphere_cell342" castShadow receiveShadow geometry={nodes.Sphere_cell342.geometry} material={materials.snow_02} position={[-0.02, 0.54, -0.11]} />
                <mesh name="Sphere_cell343" castShadow receiveShadow geometry={nodes.Sphere_cell343.geometry} material={materials.snow_02} position={[0.14, -0.2, 0.24]} />
                <mesh name="Sphere_cell344" castShadow receiveShadow geometry={nodes.Sphere_cell344.geometry} material={materials.snow_02} position={[0.02, 0.32, 0.24]} />
                <mesh name="Sphere_cell346" castShadow receiveShadow geometry={nodes.Sphere_cell346.geometry} material={materials.snow_02} position={[-0.2, 0.5, 0.08]} />
                <mesh name="Sphere_cell347" castShadow receiveShadow geometry={nodes.Sphere_cell347.geometry} material={materials.snow_02} position={[-0.08, 0.51, 0.17]} />
                <mesh name="Sphere_cell348" castShadow receiveShadow geometry={nodes.Sphere_cell348.geometry} material={materials.snow_02} position={[-0.49, -0.04, -0.19]} />
                <mesh name="Sphere_cell349" castShadow receiveShadow geometry={nodes.Sphere_cell349.geometry} material={materials.snow_02} position={[0.05, 0.43, 0.33]} />
                <mesh name="Sphere_cell350" castShadow receiveShadow geometry={nodes.Sphere_cell350.geometry} material={materials.snow_02} position={[-0.13, 0.46, 0.26]} />
                <mesh name="Sphere_cell351" castShadow receiveShadow geometry={nodes.Sphere_cell351.geometry} material={materials.snow_02} position={[0.14, -0.09, 0.53]} />
                <mesh name="Sphere_cell356" castShadow receiveShadow geometry={nodes.Sphere_cell356.geometry} material={materials.snow_02} position={[0.11, -0.44, -0.28]} />
                <mesh name="Sphere_cell359" castShadow receiveShadow geometry={nodes.Sphere_cell359.geometry} material={materials.snow_02} position={[0.47, 0.11, 0.25]} />
                <mesh name="Sphere_cell360" castShadow receiveShadow geometry={nodes.Sphere_cell360.geometry} material={materials.snow_02} position={[0, -0.36, -0.07]} />
                <mesh name="Sphere_cell361" castShadow receiveShadow geometry={nodes.Sphere_cell361.geometry} material={materials.snow_02} position={[-0.13, -0.41, 0.32]} />
            </group>
        </group>
    )
}

useGLTF.preload('/models/snowball/snow_02_2k-transformed.glb')
