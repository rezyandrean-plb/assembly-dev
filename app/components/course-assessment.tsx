"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Course, courses as mainCourses } from "@/app/data/courses";
import { getFacilitator } from "@/app/data/facilitators";
import CourseCard from "@/components/course-card";

interface AssessmentQuestion {
  id: string;
  type: string;
  question: string;
  options: Array<{
    label: string;
    value: string;
  }>;
}

interface CourseAssessmentProps {
  onRestartAssessment: () => void;
}

// Assembly.sg Course Recommendation Assessment Questions
const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "1",
    type: "single-choice",
    question: "What is your current property ownership status?",
    options: [
      {
        label: "I don't own any property yet (First-time buyer)",
        value: "first-time",
      },
      {
        label: "I currently own an HDB flat only",
        value: "hdb-only",
      },
      {
        label: "I currently own a private condo only",
        value: "condo-only",
      },
      {
        label: "I own both HDB and private property",
        value: "mixed-portfolio",
      },
      {
        label: "I own multiple properties (experienced investor)",
        value: "experienced",
      },
    ],
  },
  {
    id: "2",
    type: "single-choice",
    question:
      "What type of property are you most interested in learning about?",
    options: [
      {
        label: "HDB flats (BTO, resale, upgrading strategies)",
        value: "hdb",
      },
      {
        label: "Private condominiums (new launch and resale)",
        value: "condo",
      },
      {
        label: "Landed properties (terrace, semi-detached, bungalow)",
        value: "landed",
      },
      {
        label: "Mixed portfolio strategies (combination of property types)",
        value: "mixed",
      },
      {
        label: "I'm not sure - I want to explore all options",
        value: "explore-all",
      },
    ],
  },
  {
    id: "3",
    type: "single-choice",
    question: "What is your primary investment goal?",
    options: [
      {
        label: "Capital appreciation (long-term property value growth)",
        value: "appreciation",
      },
      {
        label: "Rental yield and passive income generation",
        value: "rental-income",
      },
      {
        label: "Upgrading my current living situation",
        value: "upgrade",
      },
      {
        label: "Building a diversified property portfolio",
        value: "portfolio",
      },
      {
        label: "Understanding market trends to time my purchase/sale",
        value: "market-timing",
      },
    ],
  },
  {
    id: "4",
    type: "single-choice",
    question:
      "What is your current knowledge level about Singapore property investment?",
    options: [
      {
        label:
          "Complete beginner - I know very little about property investment",
        value: "beginner",
      },
      {
        label: "Some basic knowledge but need structured guidance",
        value: "basic",
      },
      {
        label:
          "Intermediate - I understand basics but want to refine my strategy",
        value: "intermediate",
      },
      {
        label:
          "Advanced - I'm looking for specific insights and market intelligence",
        value: "advanced",
      },
      {
        label: "Expert - I want cutting-edge strategies and market updates",
        value: "expert",
      },
    ],
  },
  {
    id: "5",
    type: "single-choice",
    question: "Which stage of the property investment cycle are you in?",
    options: [
      {
        label: "Planning and research phase - haven't started actively looking",
        value: "planning",
      },
      {
        label: "Actively searching and evaluating properties",
        value: "searching",
      },
      {
        label: "Recently purchased and want to optimize my investment",
        value: "optimizing",
      },
      {
        label: "Looking to sell or upgrade my current property",
        value: "upgrading",
      },
      {
        label: "Managing multiple properties and planning expansion",
        value: "expanding",
      },
    ],
  },
  {
    id: "6",
    type: "single-choice",
    question:
      "What's your biggest concern or challenge in property investment?",
    options: [
      {
        label: "Making costly mistakes due to lack of knowledge",
        value: "avoid-mistakes",
      },
      {
        label: "Understanding complex financing and loan structures",
        value: "financing",
      },
      {
        label: "Identifying properties with good investment potential",
        value: "selection",
      },
      {
        label: "Timing the market correctly (when to buy/sell)",
        value: "timing",
      },
      {
        label: "Managing property taxes and cooling measures regulations",
        value: "regulations",
      },
    ],
  },
  {
    id: "7",
    type: "single-choice",
    question: "How much time can you dedicate to learning?",
    options: [
      {
        label: "I want quick insights (1-2 hour webinars)",
        value: "quick",
      },
      {
        label: "Short focused sessions (2-4 hours total)",
        value: "short",
      },
      {
        label: "Comprehensive learning (4-8 hours over multiple sessions)",
        value: "comprehensive",
      },
      {
        label: "In-depth mastery (8+ hours with detailed workshops)",
        value: "mastery",
      },
      {
        label: "Flexible - I'll adjust based on content quality",
        value: "flexible",
      },
    ],
  },
  {
    id: "8",
    type: "single-choice",
    question: "What's your preferred learning style and format?",
    options: [
      {
        label: "Live interactive webinars with Q&A sessions",
        value: "live-webinar",
      },
      {
        label: "Self-paced online courses I can complete anytime",
        value: "self-paced",
      },
      {
        label: "Workshop-style sessions with practical exercises",
        value: "workshop",
      },
      {
        label: "Masterclasses with industry experts and case studies",
        value: "masterclass",
      },
      {
        label: "Market analysis and trend-focused content",
        value: "market-analysis",
      },
    ],
  },
];

export default function CourseAssessment({
  onRestartAssessment,
}: CourseAssessmentProps) {
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState<
    Record<string, any>
  >({});
  const [showAssessmentResults, setShowAssessmentResults] = useState(false);
  const [recommendedCourses, setRecommendedCourses] = useState<Course[]>([]);

  // Handle assessment answer selection
  const handleAssessmentAnswer = (questionId: string, answer: any) => {
    setAssessmentAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  // Calculate personalized course recommendations based on assessment answers
  const calculateRecommendations = () => {
    const answers = assessmentAnswers;
    const scored: Array<{ course: Course; score: number; reasons: string[] }> =
      [];

    mainCourses.forEach((course) => {
      let score = 0;
      const reasons: string[] = [];

      // Q1: Property ownership status (determines experience level)
      if (answers["1"]) {
        if (answers["1"] === "first-time") {
          // Prioritize beginner-friendly courses
          if (
            course.slug.includes("mistakes") ||
            course.slug.includes("guide")
          ) {
            score += 4;
            reasons.push("Perfect for first-time buyers");
          }
          if (
            course.slug.includes("making-the-right-move") ||
            course.slug.includes("property-decision")
          ) {
            score += 3;
            reasons.push("Essential fundamentals");
          }
        }
        if (answers["1"] === "hdb-only") {
          if (course.slug.includes("hdb") || course.slug.includes("upgrade")) {
            score += 4;
            reasons.push("HDB upgrading strategies");
          }
          if (
            course.slug.includes("condo") ||
            course.slug.includes("new-launch")
          ) {
            score += 3;
            reasons.push("Next step: Private property");
          }
        }
        if (answers["1"] === "experienced") {
          if (
            course.slug.includes("portfolio") ||
            course.slug.includes("expansion") ||
            course.slug.includes("mastery")
          ) {
            score += 4;
            reasons.push("Advanced strategies for experienced investors");
          }
        }
      }

      // Q2: Property type interest
      if (answers["2"]) {
        if (answers["2"] === "hdb" && course.slug.includes("hdb")) {
          score += 4;
          reasons.push("HDB-focused content");
        }
        if (
          answers["2"] === "condo" &&
          (course.slug.includes("condo") || course.slug.includes("new-launch"))
        ) {
          score += 4;
          reasons.push("Private condo strategies");
        }
        if (answers["2"] === "landed" && course.slug.includes("landed")) {
          score += 4;
          reasons.push("Landed property expertise");
        }
        if (answers["2"] === "mixed" && course.slug.includes("portfolio")) {
          score += 4;
          reasons.push("Mixed portfolio strategies");
        }
        if (answers["2"] === "explore-all") {
          score += 2; // General boost for exploration
          reasons.push("Comprehensive property overview");
        }
      }

      // Q3: Investment goals
      if (answers["3"]) {
        if (answers["3"] === "appreciation" && course.slug.includes("market")) {
          score += 3;
          reasons.push("Market timing and appreciation strategies");
        }
        if (
          answers["3"] === "rental-income" &&
          course.slug.includes("investment")
        ) {
          score += 3;
          reasons.push("Rental yield optimization");
        }
        if (answers["3"] === "upgrade" && course.slug.includes("upgrade")) {
          score += 3;
          reasons.push("Property upgrading strategies");
        }
        if (answers["3"] === "portfolio" && course.slug.includes("portfolio")) {
          score += 4;
          reasons.push("Portfolio building strategies");
        }
        if (
          answers["3"] === "market-timing" &&
          (course.slug.includes("trends") ||
            course.slug.includes("2024") ||
            course.slug.includes("2025"))
        ) {
          score += 4;
          reasons.push("Market timing insights");
        }
      }

      // Q4: Knowledge level
      if (answers["4"]) {
        if (
          answers["4"] === "beginner" &&
          (course.slug.includes("mistakes") || course.slug.includes("guide"))
        ) {
          score += 3;
          reasons.push("Beginner-friendly approach");
        }
        if (
          answers["4"] === "advanced" &&
          (course.slug.includes("mastery") || course.slug.includes("strategy"))
        ) {
          score += 3;
          reasons.push("Advanced strategies");
        }
        if (answers["4"] === "expert" && course.slug.includes("masterclass")) {
          score += 4;
          reasons.push("Expert-level insights");
        }
      }

      // Q5: Investment cycle stage
      if (answers["5"]) {
        if (answers["5"] === "planning" && course.slug.includes("guide")) {
          score += 3;
          reasons.push("Perfect for planning phase");
        }
        if (
          answers["5"] === "searching" &&
          (course.slug.includes("selection") ||
            course.slug.includes("new-launch"))
        ) {
          score += 4;
          reasons.push("Property selection expertise");
        }
        if (
          answers["5"] === "optimizing" &&
          course.slug.includes("investment")
        ) {
          score += 3;
          reasons.push("Investment optimization");
        }
        if (answers["5"] === "upgrading" && course.slug.includes("selling")) {
          score += 4;
          reasons.push("Selling and upgrading strategies");
        }
        if (answers["5"] === "expanding" && course.slug.includes("portfolio")) {
          score += 4;
          reasons.push("Portfolio expansion strategies");
        }
      }

      // Q6: Biggest concerns
      if (answers["6"]) {
        if (
          answers["6"] === "avoid-mistakes" &&
          course.slug.includes("mistakes")
        ) {
          score += 4;
          reasons.push("Mistake prevention strategies");
        }
        if (answers["6"] === "financing" && course.slug.includes("financing")) {
          score += 4;
          reasons.push("Financing mastery");
        }
        if (answers["6"] === "selection" && course.slug.includes("selection")) {
          score += 4;
          reasons.push("Property selection strategies");
        }
        if (
          answers["6"] === "timing" &&
          (course.slug.includes("trends") || course.slug.includes("market"))
        ) {
          score += 4;
          reasons.push("Market timing insights");
        }
        if (
          answers["6"] === "regulations" &&
          course.slug.includes("strategy")
        ) {
          score += 3;
          reasons.push("Regulatory strategy guidance");
        }
      }

      // Q7: Time commitment preference
      if (answers["7"]) {
        // This would need duration data from courses - for now, boost shorter format courses for quick learners
        if (
          answers["7"] === "quick" &&
          (course.slug.includes("trends") || course.slug.includes("market"))
        ) {
          score += 2;
          reasons.push("Quick insights format");
        }
        if (answers["7"] === "mastery" && course.slug.includes("mastery")) {
          score += 3;
          reasons.push("In-depth mastery course");
        }
      }

      // Q8: Learning format preference
      if (answers["8"]) {
        if (
          answers["8"] === "masterclass" &&
          course.slug.includes("masterclass")
        ) {
          score += 3;
          reasons.push("Masterclass format");
        }
        if (
          answers["8"] === "market-analysis" &&
          (course.slug.includes("trends") || course.slug.includes("market"))
        ) {
          score += 3;
          reasons.push("Market analysis focus");
        }
      }

      // General quality boost for popular courses
      if (
        course.slug.includes("property-summit") ||
        course.slug.includes("mastery")
      ) {
        score += 1;
        reasons.push("Highly recommended course");
      }

      scored.push({ course, score, reasons });
    });

    // Sort by score and return top recommendations
    const recommendations = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((item) => item.course);

    setRecommendedCourses(recommendations);
    setShowAssessmentResults(true);
  };

  // Restart assessment
  const restartAssessment = () => {
    setAssessmentStep(0);
    setAssessmentAnswers({});
    setShowAssessmentResults(false);
    setRecommendedCourses([]);
    onRestartAssessment();
  };

  const currentQuestion = assessmentQuestions[assessmentStep];
  const isLastQuestion = assessmentStep === assessmentQuestions.length - 1;
  const isQuestionAnswered = assessmentAnswers[currentQuestion?.id];

  const nextQuestion = () => {
    if (isLastQuestion) {
      calculateRecommendations();
    } else {
      setAssessmentStep((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (assessmentStep > 0) {
      setAssessmentStep((prev) => prev - 1);
    }
  };

  if (showAssessmentResults) {
    return (
      <motion.div
        className="bg-white rounded-xl p-8 border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Your Personalized Learning Path
          </h3>
          <p className="text-gray-600">
            Based on your responses, here are the courses we recommend for you:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recommendedCourses.slice(0, 6).map((course, index) => {
            // Get instructor names from IDs
            const instructorNames =
              course.instructorIds
                ?.map((id) => {
                  if (id === "tbd") return "To be announced";
                  const facilitator = getFacilitator(id);
                  return facilitator?.name || "Unknown";
                })
                .join(", ") || "To be announced";

            return (
              <CourseCard
                key={course.id}
                course={{
                  title: course.title,
                  instructor: instructorNames,
                  level: course.level || "All Levels",
                  duration: course.duration || "Self-paced",
                  image: course.image,
                  slug: course.slug,
                  price: course.price || "Free",
                }}
                delay={index * 0.1}
              />
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            onClick={restartAssessment}
            className="mr-4"
          >
            Retake Assessment
          </Button>
          <Button
            className="bg-[#123B79] hover:bg-[#0f2f5f]"
            onClick={() => window.open("/courses", "_blank")}
          >
            View All Courses
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-xl p-8 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            Find Your Perfect Learning Path
          </h3>
          <span className="text-sm text-gray-500">
            {assessmentStep + 1} of {assessmentQuestions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <motion.div
            className="bg-[#123B79] h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${((assessmentStep + 1) / assessmentQuestions.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {currentQuestion && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-6">
            {currentQuestion.question}
          </h4>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={option.value}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  assessmentAnswers[currentQuestion.id] === option.value
                    ? "border-[#123B79] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() =>
                  handleAssessmentAnswer(currentQuestion.id, option.value)
                }
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      assessmentAnswers[currentQuestion.id] === option.value
                        ? "border-[#123B79] bg-[#123B79]"
                        : "border-gray-300"
                    }`}
                  >
                    {assessmentAnswers[currentQuestion.id] === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                    )}
                  </div>
                  <span className="text-gray-700">{option.label}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={previousQuestion}
              disabled={assessmentStep === 0}
            >
              Previous
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={!isQuestionAnswered}
              className="bg-[#123B79] hover:bg-[#0f2f5f]"
            >
              {isLastQuestion ? "Get Recommendations" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export { assessmentQuestions };
export type { AssessmentQuestion, CourseAssessmentProps };
