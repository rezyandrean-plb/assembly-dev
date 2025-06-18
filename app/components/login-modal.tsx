"use client";

import React from "react";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      data-oid="gkaz56:"
    >
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-8"
        data-oid="xg82:5d"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          data-oid="sypx:in"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            data-oid="dqimyj."
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              data-oid="u7203iy"
            />
          </svg>
        </button>
        <div className="text-center" data-oid="fgi_eb7">
          <h2 className="text-2xl font-bold mb-2" data-oid="1fm-e8j">
            Returning Customers
          </h2>
          <p className="text-sm text-gray-600 mb-2" data-oid="ru:eof3">
            Please sign in to enjoy a faster checkout experience.
          </p>
          <p className="text-sm text-gray-600 mb-6" data-oid="je0oguy">
            Not yet a member?{" "}
            <Link
              href="/signup"
              className="font-semibold text-primary hover:underline"
              data-oid="zztkdz5"
            >
              Sign up
            </Link>
          </p>

          <form data-oid="479f:tw">
            <div className="space-y-4 text-left" data-oid="pjgyymd">
              <div data-oid="e13fbuz">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                  data-oid="c6a:inh"
                >
                  EMAIL*
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full"
                  defaultValue="pyee.t104@gmail.com"
                  data-oid="t:4u.-7"
                />
              </div>
              <div data-oid="h2m.mtf">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="password"
                  data-oid="fhro9c4"
                >
                  PASSWORD*
                </label>
                <input
                  type="password"
                  id="password"
                  className="input input-bordered w-full"
                  defaultValue="********"
                  data-oid="skar.oa"
                />
              </div>
            </div>
            <div
              className="flex justify-between items-center mt-4"
              data-oid="mej-3j-"
            >
              <a
                href="#"
                className="text-sm text-primary hover:underline"
                data-oid="pmb6mhz"
              >
                Forgotten your password?
              </a>
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="btn btn-primary w-full mt-6"
              data-oid="8ge7v:l"
            >
              CONTINUE TO CHECKOUT
            </button>
            <div className="mt-4 text-left" data-oid="dv2xp:w">
              <label className="flex items-center" data-oid="2acqtqh">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  defaultChecked
                  data-oid="h_.rwz5"
                />
                <span className="ml-2 text-sm text-gray-700" data-oid="d.:u6nd">
                  Keep me signed in
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
