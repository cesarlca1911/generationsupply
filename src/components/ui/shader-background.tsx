"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

interface ShaderBackgroundProps {
  color1?: string;
  color2?: string;
}

const vertexShader = `
  uniform float time;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.y += sin(pos.x * 5.0 + time) * 0.05;
    pos.x += cos(pos.y * 4.0 + time * 0.8) * 0.03;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    float noise = sin(uv.x * 15.0 + time) * cos(uv.y * 10.0 + time * 0.8);
    noise += sin(uv.x * 25.0 - time * 1.5) * cos(uv.y * 18.0 + time * 0.9) * 0.5;

    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
    float brightness = 0.8 + 0.2 * sin(time * 0.5);
    color = color * brightness;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane({ color1, color2 }: { color1: string; color2: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    }),
    [color1, color2]
  );

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function ShaderBackground({ color1 = "#f5f5f5", color2 = "#e8e8e8" }: ShaderBackgroundProps) {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
    >
      <ShaderPlane color1={color1} color2={color2} />
    </Canvas>
  );
}
