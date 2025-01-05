import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop",
    rating: 5,
    text: "Found my dream job through JobHub! The platform is intuitive and the job matching is spot-on."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Manager",
    company: "GrowthLabs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop",
    rating: 5,
    text: "Excellent platform for job seekers. The filtering options helped me find exactly what I was looking for."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "DesignHub",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop",
    rating: 4,
    text: "The job application process is smooth and straightforward. Great experience overall!"
  }
];

export default function ReviewSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-gray-600">Discover how OppotunityKart has helped professionals find their perfect roles</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h4 className="font-semibold text-gray-900">{review.name}</h4>
              <p className="text-sm text-gray-600 mb-4">{review.role} at {review.company}</p>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
