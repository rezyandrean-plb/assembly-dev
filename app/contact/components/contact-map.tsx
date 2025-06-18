"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export default function ContactMap() {
  const [isHovered, setIsHovered] = useState(false);

  // Office location coordinates
  const location = {
    name: "Assembly SG",
    address: "Oxley Bizhub 2, #11-15, 62 Ubi Road 1, Singapore 408734",
    googleMapsUrl:
      "https://maps.google.com/?q=Oxley+Bizhub+2+62+Ubi+Road+1+Singapore+408734",
  };

  return (
    <div className="relative w-full h-full bg-blue-50" data-oid="wp7_huf">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden" data-oid="g-njx:u">
        {/* Grid lines */}
        <div
          className="absolute inset-0 grid grid-cols-12 gap-4"
          data-oid="vk8:ioa"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`col-${i}`}
              className="h-full w-full border-r border-blue-100"
              data-oid="myx4xhg"
            />
          ))}
        </div>
        <div
          className="absolute inset-0 grid grid-rows-12 gap-4"
          data-oid="u44wvqn"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`row-${i}`}
              className="w-full h-full border-b border-blue-100"
              data-oid="6rf8hk0"
            />
          ))}
        </div>

        {/* Decorative circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-200 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          data-oid="boy8x:g"
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-blue-300 opacity-10"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
          data-oid="s3p25bn"
        />
      </div>

      {/* Singapore map outline (simplified SVG) */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-20"
        data-oid="uza.l2g"
      >
        <svg
          width="60%"
          height="60%"
          viewBox="0 0 100 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="8xgetcd"
        >
          <path
            d="M20.3,10.2c0,0,7.5-0.2,11.4,0.1c3.9,0.3,9.5,1.6,14.4,1.6c4.9,0,10.2-0.8,15.4-0.6c5.2,0.2,10.1,1.2,15.2,1.5
            c5.1,0.3,10.3-0.4,10.3-0.4s2.1,0.8,2.8,2.9c0.7,2.1,0.5,4.6,0.5,4.6s-1.9,0.3-2.8,1.9c-0.9,1.6-0.9,3.9-0.9,3.9s-2.1,0.3-3.5,1.4
            c-1.4,1.1-2.3,2.8-2.3,2.8s-3.2,0.2-5.6,0.9c-2.4,0.7-4.1,2-4.1,2s-2.8-0.5-5.6-0.5c-2.8,0-5.6,0.5-5.6,0.5s-2.1-1.1-4.4-1.6
            c-2.3-0.5-4.9-0.4-4.9-0.4s-1.9-1.4-4.1-2.1c-2.2-0.7-4.7-0.8-4.7-0.8s-1.6-1.6-3.5-2.5c-1.9-0.9-4.1-1.1-4.1-1.1s-1.2-1.8-2.8-2.9
            c-1.6-1.1-3.5-1.6-3.5-1.6s-0.9-1.9-2.1-3.2c-1.2-1.3-2.8-2-2.8-2s-0.7-1.6-1.6-2.8C20.8,11.8,20.3,10.2,20.3,10.2z"
            fill="#2563EB"
            stroke="#1E40AF"
            strokeWidth="0.5"
            data-oid="-hqxo3r"
          />
        </svg>
      </div>

      {/* Location pin */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        data-oid="1uvurxx"
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          data-oid="y8wosai"
        >
          <div className="relative" data-oid="1p:z:qq">
            <MapPin
              className="h-12 w-12 text-blue-600 drop-shadow-lg"
              data-oid="fa71b39"
            />

            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-blue-600 rounded-full opacity-30"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              data-oid="zb0:tlv"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Location card */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 w-[90%] max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-oid="hv1g-h3"
      >
        <div className="flex items-start gap-3" data-oid="wx5-xdg">
          <div className="bg-blue-100 p-2 rounded-full" data-oid="dhqm1f0">
            <MapPin className="h-5 w-5 text-blue-600" data-oid="sekofci" />
          </div>
          <div className="flex-1" data-oid="ox1kuvc">
            <h3 className="font-bold text-gray-900" data-oid="0c0i84g">
              {location.name}
            </h3>
            <p className="text-gray-600 text-sm" data-oid="5z:m2oz">
              {location.address}
            </p>
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-sm font-medium text-blue-600 hover:text-blue-800"
              data-oid="cyddlxy"
            >
              Get Directions
              <ExternalLink className="ml-1 h-3 w-3" data-oid="gbrpo:c" />
            </a>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-blue-600 rounded-bl-xl rounded-br-xl"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "30%" }}
          transition={{ duration: 0.3 }}
          data-oid="7on_z9a"
        />
      </motion.div>
    </div>
  );
}
