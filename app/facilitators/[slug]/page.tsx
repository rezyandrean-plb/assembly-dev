import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getFacilitator } from "@/app/data/facilitators";
import { FacilitatorHero } from "./components/facilitator-hero";
import { FacilitatorCourses } from "./components/facilitator-courses";

interface FacilitatorPageProps {
  params: {
    slug: string;
  };
}

export default function FacilitatorPage({ params }: FacilitatorPageProps) {
  const facilitator = getFacilitator(params.slug);

  if (!facilitator) {
    notFound();
  }

  return (
    <>
      <div className="bg-white">
        {/* Back Navigation */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Link
              href="/facilitators"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Facilitators
            </Link>
          </div>
        </div>

        <FacilitatorHero facilitator={facilitator} />
        <FacilitatorCourses facilitator={facilitator} />
      </div>
    </>
  );
}
