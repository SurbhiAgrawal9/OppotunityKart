import React from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Review.css'

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
},
{
  "id": 4,
  "name": "James Wilson",
  "role": "Product Manager",
  "company": "InnovateTech",
  "avatar": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=128&h=128&fit=crop",
  "rating": 5,
  "text": "InnovateTech provided me with a fantastic opportunity to grow my career. The team is amazing and the culture is supportive."
},
{
  "id": 5,
  "name": "Ava Martinez",
  "role": "Data Scientist",
  "company": "DataSolutions",
  "avatar": "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=128&h=128&fit=crop",
  "rating": 4,
  "text": "I was impressed with the variety of job listings on the platform. It made my job search easier and more efficient."
},
{
  "id": 6,
  "name": "Liam Brown",
  "role": "Backend Developer",
  "company": "CodeFactory",
  "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop",
  "rating": 5,
  "text": "The backend development role at CodeFactory has been a dream come true. The projects are challenging and rewarding."
},
{
  "id": 7,
  "name": "Sophia Davis",
  "role": "Marketing Specialist",
  "company": "MarketMinds",
  "avatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=128&h=128&fit=crop",
  "rating": 4,
  "text": "MarketMinds has been a great place to work. The marketing team is highly skilled and I've learned a lot from my colleagues."
},
{
  "id": 8,
  "name": "William Garcia",
  "role": "Cybersecurity Analyst",
  "company": "SecureNet",
  "avatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=128&h=128&fit=crop",
  "rating": 5,
  "text": "The cybersecurity analyst position at SecureNet is exactly what I was looking for. The environment is fast-paced and rewarding."
},
];

export default function ReviewSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-2xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-gray-600">Discover how OpportunityKart has helped professionals find their perfect roles</p>
        </div>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="p-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-20 h-20 sm:w-16 sm:h-16 rounded-full mb-4"
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
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}