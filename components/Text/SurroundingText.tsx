import { useFrame, useLoader } from '@react-three/fiber';
import { useMemo, useState } from 'react';
import { DoubleSide, ShaderMaterial, Vector3 } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { getDeviceDependent, useAltScroll } from '../utils/hooks';

import text_fs from '../shaders/text_fs.glsl';
import text_vs from '../shaders/text_vs.glsl';

export default function SurroundingText(props) {
    const altScroll = useAltScroll();

    const font = useLoader(FontLoader, '/fonts/Roboto_Bold.json');

    const characters = props.text.split('');

    const fontSize = getDeviceDependent(props.fontSize * 0.6, props.fontSize)

    let [meshes, meshMaterials, offsets] = useMemo(() => computeMeshAndMaterial(
        characters,
        font,
        fontSize,
        props
    ), [])

    const scrollAmount = useAltScroll()

    useFrame((state) => {
        const radius = props.radius + props.expandOnScrollSpeed * altScroll;
        // const opacity = 1 - (props.expandOnScrollSpeed == 0 ? 0 : altScroll);
        const time = state.clock.getElapsedTime();

        let phi = 0;
        let theta = props.initOffset;
        const charSpacingAngle = 0.02;

        for (let i = 0; i < characters.length; i++) {
            const mat = meshMaterials[i];
            const offset = offsets[i];

            mat.uniforms.uTime.value = time;
            mat.uniforms.uRadius.value = radius;
            mat.uniforms.uPhi.value = phi;
            mat.uniforms.uTheta.value = theta;
            mat.uniforms.uCenterOffset.value = offset;
            mat.uniforms.uScrollAmount.value = scrollAmount;

            theta +=  Math.atan2(offset, mat.uniforms.uRadius.value) + charSpacingAngle;
        }
    });

    return <group position={props.position}>{meshes}</group>;
}

function computeMeshAndMaterial(characters, font, fontSize, props) {
    const spaceWidth = 0.5;

    const charMeshes = new Array(characters.length);
    const meshMaterials = new Array(characters.length);
    const offsets = new Array(characters.length);

    const uniforms = {
        uTime: { value: 1.0 },
        uRadius: { value: 0.0 },
        uCenterOffset: { value: 0.0 },
        uPhi: { value: 0.0 },
        uTheta: { value: 0.0 },
        uScrollAmount: { value: 0.0 },
        uFadeInOnScrollSpeed: { value: props.fadeInOnScrollSpeed },
    };

    const sharedMaterial = new ShaderMaterial({
        uniforms: uniforms,
        vertexShader: text_vs,
        fragmentShader: text_fs,
        transparent: true,
        side: DoubleSide,
    });

    for (const [i, char] of characters.entries()) {
        const geometry = new TextGeometry(char, {
            font: font,
            size: fontSize,
            height: 0.1,
        });

        geometry.computeBoundingBox();

        offsets[i] = isFinite(geometry.boundingBox.max.x) // check if space character
            ? geometry.boundingBox.max.x - geometry.boundingBox.min.x
            : spaceWidth;

        meshMaterials[i] = sharedMaterial.clone();
        meshMaterials[i].transparent = true;

        charMeshes[i] = (
            <mesh
                key={i}
                geometry={geometry}
                material={meshMaterials[i]}
                rotation-z={props.rotationZ}
            />
        );
    }

    return [charMeshes, meshMaterials, offsets];
}

SurroundingText.defaultProps = {
    radius: 8.5,
    expandOnScrollSpeed: 30,
    rotationZ: 0,
    initOffset: 0,
    fadeInOnScrollSpeed: 0,
    position: new Vector3(0,0,0),
    fontSize: 1.0
};
