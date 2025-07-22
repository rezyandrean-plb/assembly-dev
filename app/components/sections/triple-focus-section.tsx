"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2, TrendingUp, GraduationCap } from "lucide-react";

export default function TripleFocusSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const canvasRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !canvasRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(sectionRef.current);

    // Canvas background animation
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create connection points for each focus area
    const points = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        vx: 0.3,
        vy: 0.2,
        radius: 3,
        color: "#f97316",
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.2,
        vx: -0.2,
        vy: 0.3,
        radius: 3,
        color: "#3b82f6",
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.3,
        vx: -0.3,
        vy: 0.2,
        radius: 3,
        color: "#22c55e",
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.6,
        vx: 0.2,
        vy: -0.3,
        radius: 3,
        color: "#f97316",
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.7,
        vx: 0.1,
        vy: -0.2,
        radius: 3,
        color: "#3b82f6",
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.6,
        vx: -0.2,
        vy: -0.3,
        radius: 3,
        color: "#22c55e",
      },
      {
        x: canvas.width * 0.4,
        y: canvas.height * 0.4,
        vx: 0.2,
        vy: 0.2,
        radius: 2,
        color: "#f97316",
      },
      {
        x: canvas.width * 0.6,
        y: canvas.height * 0.4,
        vx: -0.2,
        vy: 0.2,
        radius: 2,
        color: "#3b82f6",
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.5,
        vx: 0,
        vy: -0.2,
        radius: 2,
        color: "#22c55e",
      },
    ];

    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points position
      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();
      });

      // Draw connections between points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);

            // Gradient based on point colors
            const gradient = ctx.createLinearGradient(
              points[i].x,
              points[i].y,
              points[j].x,
              points[j].y,
            );
            const opacity = 1 - distance / 150;
            gradient.addColorStop(0, points[i].color);
            gradient.addColorStop(1, points[j].color);
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 1 * (1 - distance / 150);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const focusAreas = [
    {
      icon: <Building2 className="h-12 w-12 text-orange-500" />,

      title: "Real Estate",
      description:
        "Navigate Singapore's dynamic property market with expert insights on trends, regulations, and opportunities.",
      color: "from-orange-500/20 to-orange-600/10",
      borderColor: "border-orange-500/30",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-500" />,

      title: "Finance",
      description:
        "Master the financial aspects of real estate with knowledge on investment strategies, mortgages, and market analysis.",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30",
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-green-500" />,

      title: "Learning",
      description:
        "Continuously develop your expertise through structured courses, workshops, and community knowledge sharing.",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-500/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Triple Focus</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Assembly brings together three essential pillars for success in
            Singapore's real estate industry
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {focusAreas.map((focus, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border hover:shadow-xl transition-shadow duration-300"
              style={{ borderColor: focus.borderColor.split("-")[1] }}
              variants={itemVariants}
            >
              <div
                className={`rounded-full p-4 inline-block bg-gradient-to-br ${focus.color} mb-6`}
              >
                {focus.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {focus.title}
              </h3>
              <p className="text-gray-600">{focus.description}</p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href={`/${focus.title.toLowerCase().replace(" ", "-")}`}
                  className="inline-flex items-center text-gray-700 font-medium hover:text-orange-500 transition-colors"
                >
                  Explore {focus.title}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
