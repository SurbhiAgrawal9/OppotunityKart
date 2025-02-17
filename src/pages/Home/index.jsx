import React from "react";
import ReviewSection from "../../components/ReviewSection";
import SearchBar from "../../components/SearchBar";
import CategoryFilter from "../../components/CategoryFilter";
import JobCard from "../../components/JobCard";
import InquiryForm from "../../components/InquiryForm";
import { jobs } from "../../data/jobs";

function Home() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All Jobs");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Jobs" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="bg-gradient-to-r from-g-blue via-g-purple to-g-blue animate-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Find Your Dream Job Today
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Discover opportunities that match your skills and aspirations
            </p>
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CategoryFilter onSelect={setSelectedCategory} />
        </div>
        <div className="space-y-6 mb-16">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
        <ReviewSection />
        <InquiryForm />
      </main>
    </>
  );
}

export default Home;
