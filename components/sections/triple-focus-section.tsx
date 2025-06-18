"use client";

import type React from "react";
import { useRef, useEffect } from "react";

interface TripleFocusSectionProps {
  title: string;
  description: string;
  focusPoints: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const TripleFocusSection: React.FC<TripleFocusSectionProps> = ({
  title,
  description,
  focusPoints,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawNetwork();
    };

    const drawNetwork = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const numPoints = 50;
      const points: { x: number; y: number }[] = [];

      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        });
      }

      const connectPoints = (
        point1: { x: number; y: number },
        point2: { x: number; y: number },
      ) => {
        const distance = Math.sqrt(
          Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2),
        );

        if (distance < 150) {
          const opacity = 1 - distance / 150;
          ctx.beginPath();
          ctx.moveTo(point1.x, point1.y);
          ctx.lineTo(point2.x, point2.y);
          ctx.strokeStyle = "rgba(255, 255, 255, " + opacity + ")";
          ctx.globalAlpha = opacity * 0.9; // Reduced opacity by 10%
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      };

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          connectPoints(points[i], points[j]);
        }
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      className="py-12 bg-gray-900 text-white relative overflow-hidden"
      data-oid="-8s590v"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ pointerEvents: "none" }}
        data-oid="qvi_a22"
      />

      <div className="container mx-auto px-4 relative z-10" data-oid="zrvhn6d">
        <h2 className="text-3xl font-semibold mb-4" data-oid="94zvwfm">
          {title}
        </h2>
        <p className="text-gray-300 mb-8" data-oid="2cndbkk">
          {description}
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="n7ecq4-"
        >
          {focusPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
              data-oid="8f:ne7_"
            >
              <div className="text-4xl mb-4" data-oid="7kx66h0">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2" data-oid="p05.8g:">
                {point.title}
              </h3>
              <p className="text-gray-300" data-oid="snf3c:v">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripleFocusSection;
