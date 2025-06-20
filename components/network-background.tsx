"use client";

import { useEffect, useRef, useState } from "react";
import { useNetwork } from "@/context/network-context";
import * as THREE from "three";

interface NetworkBackgroundProps {
  scrollY: number;
  scrollSpeed: number;
  windowHeight: number;
  opacity?: number; // Add this optional prop
}

export default function NetworkBackground({
  scrollY,
  scrollSpeed,
  windowHeight,
  opacity = 1,
}: NetworkBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setNetworkState } = useNetwork();
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [nodes, setNodes] = useState<THREE.Mesh[]>([]);
  const [lines, setLines] = useState<THREE.Line[]>([]);
  const [particles, setParticles] = useState<THREE.Points | null>(null);
  const prevScrollY = useRef(0);
  const scrollSpeedThreshold = 0.01;
  const scrubbingRate = 0.5; // Lower values make animation slower relative to scroll
  const animationFrameRef = useRef<number | null>(null);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene
    const newScene = new THREE.Scene();

    // Create camera
    const newCamera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    newCamera.position.z = 5;

    // Create renderer
    const newRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    newRenderer.setSize(window.innerWidth, window.innerHeight);
    newRenderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(newRenderer.domElement);

    // Create initial nodes
    const newNodes: THREE.Mesh[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.05, 16, 16);

    // Create nodes for Real Estate (brown)
    const realEstateMaterial = new THREE.MeshBasicMaterial({ color: 0x794b12 });
    for (let i = 0; i < 10; i++) {
      const node = new THREE.Mesh(nodeGeometry, realEstateMaterial);
      node.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5,
      );
      node.userData = { type: "realEstate" };
      newScene.add(node);
      newNodes.push(node);
    }

    // Create nodes for Finance (gold)
    const financeMaterial = new THREE.MeshBasicMaterial({ color: 0xf0a500 });
    for (let i = 0; i < 10; i++) {
      const node = new THREE.Mesh(nodeGeometry, financeMaterial);
      node.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5,
      );
      node.userData = { type: "finance" };
      newScene.add(node);
      newNodes.push(node);
    }

    // Create nodes for Learning (burgundy)
    const learningMaterial = new THREE.MeshBasicMaterial({ color: 0x79123b });
    for (let i = 0; i < 10; i++) {
      const node = new THREE.Mesh(nodeGeometry, learningMaterial);
      node.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5,
      );
      node.userData = { type: "learning" };
      newScene.add(node);
      newNodes.push(node);
    }

    // Create initial lines
    const newLines: THREE.Line[] = [];
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x123b79,
      transparent: true,
      opacity: 0.3 * opacity, // Multiply by the component opacity
    });

    // Connect some nodes with lines
    for (let i = 0; i < newNodes.length; i++) {
      for (let j = i + 1; j < newNodes.length; j++) {
        if (Math.random() > 0.85) {
          const points = [];
          points.push(newNodes[i].position);
          points.push(newNodes[j].position);

          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, lineMaterial);
          newScene.add(line);
          newLines.push(line);
        }
      }
    }

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xf0a500,
      transparent: true,
      opacity: 0.5 * opacity, // Multiply by the component opacity
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    newScene.add(particlesMesh);

    // Set state
    setScene(newScene);
    setCamera(newCamera);
    setRenderer(newRenderer);
    setNodes(newNodes);
    setLines(newLines);
    setParticles(particlesMesh);

    // Add this scroll-driven render function
    const render = () => {
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    // Initial render
    render();

    // Handle window resize
    const handleResize = () => {
      if (newCamera && newRenderer) {
        newCamera.aspect = window.innerWidth / window.innerHeight;
        newCamera.updateProjectionMatrix();
        newRenderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Animation loop for constant particle movement
    const animate = () => {
      if (particles) {
        // Apply constant slow rotation
        particles.rotation.x += 0.0003;
        particles.rotation.y += 0.0002;

        // Render the scene
        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      }

      // Continue the animation loop
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("resize", handleResize);
      if (containerRef.current && newRenderer) {
        containerRef.current.removeChild(newRenderer.domElement);
      }

      // Dispose of geometries and materials
      nodeGeometry.dispose();
      realEstateMaterial.dispose();
      financeMaterial.dispose();
      learningMaterial.dispose();
      lineMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  // Update network based on scroll position
  useEffect(() => {
    if (!scene || !camera || !nodes || !lines || !particles || !windowHeight)
      return;

    // Calculate scroll progress (0 to 1) for the entire page
    const docHeight = document.documentElement.scrollHeight;
    const scrollProgress = scrollY / (docHeight - windowHeight);

    // Store previous scroll position to calculate scroll speed
    const scrollSpeedCalc = Math.abs(scrollY - prevScrollY.current) * 0.01;
    prevScrollY.current = scrollY;

    // Update network state for context
    setNetworkState({
      scrollProgress,
      density: Math.min(0.3 + scrollProgress * 0.7, 1),
      activity: Math.min(0.2 + scrollProgress * 0.8, 1),
    });

    // Update nodes based on scroll position
    nodes.forEach((node, index) => {
      // Keep nodes spread out regardless of scroll position
      // Only update scale based on scroll
      const baseScale = 1;
      const targetScale = 1.5 + Math.random() * 0.5;
      node.scale.setScalar(
        baseScale + (targetScale - baseScale) * scrollProgress,
      );
    });

    // Update lines
    lines.forEach((line, index) => {
      // Update line opacity based on scroll
      const material = line.material as THREE.LineBasicMaterial;
      material.opacity = 0.3 + scrollProgress * 0.7;
    });

    // Update particles based on scroll speed
    if (particles) {
      // Reduce rotation speed by 50% (multiply by 0.5)
      const rotationFactor = Math.min(
        scrollSpeed * 0.0001 * scrubbingRate * 0.5,
        0.0025,
      );

      if (scrollSpeed > 0.1) {
        // Add additional rotation based on scroll speed
        particles.rotation.x += rotationFactor;
        particles.rotation.y += rotationFactor;
      }

      // Increase particle opacity with scroll
      const material = particles.material as THREE.PointsMaterial;
      material.opacity = 0.3 + scrollProgress * 0.7;

      // Increase particle size with scroll
      material.size = 0.02 + scrollProgress * 0.03;
    }

    // Render the scene after updates
    const render = () => {
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };
    render();
  }, [
    scrollY,
    scrollSpeed,
    windowHeight,
    scene,
    camera,
    nodes,
    lines,
    particles,
    setNetworkState,
  ]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: opacity }}
      data-oid="gh3czzp"
    />
  );
}
