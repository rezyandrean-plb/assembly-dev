"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useAuth } from "@/context/auth-context";

function TestEnrollmentPage() {
  const { isLoggedIn, user } = useAuth();
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const testEnrollment = async () => {
    if (!isLoggedIn || !user?.email) {
      setResult("Please log in first");
      return;
    }

    setLoading(true);
    try {
      const headers = {
        "Content-Type": "application/json",
        "x-user-email": user.email,
        "x-user-name": user.name || "",
        "x-user-image": user.image || "",
      };

      // Test enrollment
      const enrollResponse = await fetch("/api/enrollments", {
        method: "POST",
        headers,
        body: JSON.stringify({
          courses: [
            {
              id: "test-course-123",
              title: "Test Course - Property Investment Basics",
              slug: "test-course-property-investment-basics",
              price: 0,
            },
          ],

          orderId: "TEST-" + Date.now(),
        }),
      });

      if (enrollResponse.ok) {
        const enrollData = await enrollResponse.json();
        setResult(`✅ Enrollment successful: ${enrollData.message}`);

        // Now test fetching enrollments
        const getResponse = await fetch("/api/enrollments", { headers });
        if (getResponse.ok) {
          const enrollments = await getResponse.json();
          setResult(
            (prev) =>
              prev +
              `\n\n📚 Your enrollments: ${JSON.stringify(enrollments, null, 2)}`,
          );
        }
      } else {
        const errorText = await enrollResponse.text();
        setResult(`❌ Enrollment failed: ${errorText}`);
      }
    } catch (error) {
      setResult(
        `❌ Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    } finally {
      setLoading(false);
    }
  };

  const testStats = async () => {
    if (!isLoggedIn || !user?.email) {
      setResult("Please log in first");
      return;
    }

    setLoading(true);
    try {
      const headers = {
        "x-user-email": user.email,
        "x-user-name": user.name || "",
        "x-user-image": user.image || "",
      };

      const response = await fetch("/api/user/stats", { headers });
      if (response.ok) {
        const stats = await response.json();
        setResult(`📊 User stats: ${JSON.stringify(stats, null, 2)}`);
      } else {
        const errorText = await response.text();
        setResult(`❌ Stats failed: ${errorText}`);
      }
    } catch (error) {
      setResult(
        `❌ Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Test Enrollment System</h1>

      {!isLoggedIn ? (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
          <p>
            Please{" "}
            <a href="/login" className="text-blue-600 underline">
              log in
            </a>{" "}
            to test the enrollment system.
          </p>
        </div>
      ) : (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <p>
            ✅ Logged in as: {user?.name} ({user?.email})
          </p>
        </div>
      )}

      <div className="space-y-4 mb-6">
        <button
          onClick={testEnrollment}
          disabled={!isLoggedIn || loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Testing..." : "Test Course Enrollment"}
        </button>

        <button
          onClick={testStats}
          disabled={!isLoggedIn || loading}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed ml-4"
        >
          {loading ? "Testing..." : "Test User Stats"}
        </button>
      </div>

      {result && (
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Test Result:</h3>
          <pre className="whitespace-pre-wrap text-sm">{result}</pre>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">How to use:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Make sure you're logged in</li>
          <li>Click "Test Course Enrollment" to enroll in a test course</li>
          <li>Click "Test User Stats" to view your learning statistics</li>
          <li>
            Go to your{" "}
            <a
              href="/profile/learning-progress"
              className="text-blue-600 underline"
            >
              Learning Progress
            </a>{" "}
            page to see enrolled courses
          </li>
        </ol>
      </div>
    </div>
  );
}

// Export as dynamic to skip SSR
export default dynamic(() => Promise.resolve(TestEnrollmentPage), {
  ssr: false,
});
