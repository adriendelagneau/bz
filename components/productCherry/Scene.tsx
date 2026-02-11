"use client";

import { useGSAP } from "@gsap/react";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { Group } from "three";

import FloatingCan from "@/components/FloatingCan";

gsap.registerPlugin(ScrollTrigger);

type SceneProps = {
  flavor: "original" | "cherry" | "zero" | "lime" | "grape";
};

const Scene = ({ flavor }: SceneProps) => {
  const canRef = useRef<Group>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 2799px)", () => {
      if (!canRef.current) return;

        gsap.set(canRef.current.position, {x: -0.02, y: -0.47 });

      const scrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".product-cherry",
          start: "top 10%",
          // markers: true
        },
      });

      scrollTL.fromTo(
        canRef.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 0.67, y: 0.67, z: 0.67, duration: 0.4, ease: "back.out" }
      );
    });

    // optional cleanup
    return () => mm.revert();
  });

  return (
    <group rotation={[0, 0, -0.1]} position={[0, 0, 0]}>
      <FloatingCan
        ref={canRef}
        flavor={flavor}
        rotationIntensity={1}
        floatIntensity={0.5}
        floatSpeed={2}
      />
      <directionalLight
        position={[0, 0, 5]}
        intensity={0.7}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <ambientLight intensity={10} />
      <pointLight position={[-0, 1, 3]} intensity={6} />
      <Environment files={"/hdr/studio.hdr"} environmentIntensity={0.5} />
    </group>
  );
};

export default Scene;
