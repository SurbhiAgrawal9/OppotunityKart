import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Spin } from "antd";
import { avatar, bgColors } from "../../global/global";
import { useReactToPrint } from "react-to-print";
import style from "./Profile.module.css";
import { jobs } from "../../data/jobs";
import JobCard from "../../components/JobCard";
import Resume from "../../components/Resume";

const Profile = () => {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const contentRef = useRef();

  const formatDate = (dob) => {
    const date = new Date(dob);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-GB", options); // or use 'en-US' for different formats
  };

  const getAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return `${age} years old`;
  };

  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className={style["main-container"]}>
      <div className={style["profilepage-container"]}>
        <div className={style["profile-header"]}>
          <div className={style["avatar-container"]}>
            <img
              src={user?.profilePicture || avatar}
              alt="Profile"
              className={style["avatar-image"]}
            />
            <div>
              <h2 className={style["username"]}>
                {user?.fullname || "John Doe"}
                <span className="text-base">
                  ({user?.birthDate ? getAge(user.birthDate) : "N/A"},{" "}
                  {user?.gender})
                </span>
              </h2>
              <p className={style["email"]}>
                {user?.email}, {user?.address || "N/A"}
              </p>
              <div>
                <h3>
                  {user?.experience}, {user?.qualification}
                </h3>
              </div>
            </div>
          </div>
          <button
            onClick={() => reactToPrintFn()}
            className={`${style["resume-button"]} ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? <Spin /> : "Download Resume"}
          </button>
        </div>

        {/* Profile Information */}
        <div className={style["skills-container"]}>
          {user?.skills?.map((item, index) => {
            const randomColor =
              bgColors[Math.floor(Math.random() * bgColors.length)];
            return (
              <div
                key={index}
                className={`${randomColor} text-white px-4 py-2 rounded-lg`}
              >
                {item}
              </div>
            );
          })}
        </div>

        {/* Recommended Jobs Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Recommended For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "none" }}>
        <Resume ref={contentRef} />
      </div>
    </div>
  );
};

export default Profile;
