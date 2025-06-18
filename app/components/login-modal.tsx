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
      data-oid="nf4lu55"
    >
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-8"
        data-oid="z2s2mr2"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          data-oid="a6a5r_3"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            data-oid=".n79j.b"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              data-oid="ik.ibm8"
            />
          </svg>
        </button>
        <div className="text-center" data-oid="f2siu-n">
          <h2 className="text-2xl font-bold mb-2" data-oid="nesv:57">
            Returning Customers
          </h2>
          <p className="text-sm text-gray-600 mb-2" data-oid="9g3l6ba">
            Please sign in to enjoy a faster checkout experience.
          </p>
          <p className="text-sm text-gray-600 mb-6" data-oid="hj84eal">
            Not yet a member?{" "}
            <Link
              href="/signup"
              className="font-semibold text-primary hover:underline"
              data-oid="ovnev6:"
            >
              Sign up
            </Link>
          </p>

          <form data-oid="0-bg4ub">
            <div className="space-y-4 text-left" data-oid=".amth4q">
              <div data-oid="j:4f1mc">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                  data-oid="gy.byz9"
                >
                  EMAIL*
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full"
                  defaultValue="pyee.t104@gmail.com"
                  data-oid="1f61nn3"
                />
              </div>
              <div data-oid="bggao7-">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="password"
                  data-oid="0rwi2ha"
                >
                  PASSWORD*
                </label>
                <input
                  type="password"
                  id="password"
                  className="input input-bordered w-full"
                  defaultValue="********"
                  data-oid="ln6u8k7"
                />
              </div>
            </div>
            <div
              className="flex justify-between items-center mt-4"
              data-oid=".1_8ecy"
            >
              <a
                href="#"
                className="text-sm text-primary hover:underline"
                data-oid="5:qp95g"
              >
                Forgotten your password?
              </a>
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="btn btn-primary w-full mt-6"
              data-oid="e68t-ua"
            >
              CONTINUE TO CHECKOUT
            </button>
            <div className="mt-4 text-left" data-oid="o_wlmtc">
              <label className="flex items-center" data-oid="zv..b9b">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  defaultChecked
                  data-oid=".gvf43h"
                />

                <span className="ml-2 text-sm text-gray-700" data-oid="x6d96j_">
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
