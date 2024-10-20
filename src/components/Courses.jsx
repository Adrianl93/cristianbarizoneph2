import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Courses.css";
import whatsappIcon from "../assets/whatsappIcon.svg";
import OnlineCourses from "./OnlineCourses";

const Courses = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const courseStartDate = new Date(data.courseStartDate);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = courseStartDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(timer);
      } else {
        const timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };

        setTimeLeft(timeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [courseStartDate]);

  const handleWhatsAppClick = () => {
    const phoneNumber = data.contact.whatsapp.replace(/\D/g, "");
    const message = data.contact.message;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleViewCoursesClick = () => {
    navigate("/OnlineCourses");
  };

  return (
    <div className="course-container">
      <div className="contentGrid">
        <div className="course-image-container">
          <img
            src={data.image}
            alt="Curso de fotografía"
            className="course-image"
          />
        </div>
        <div className="course-description">
          <h2>{data.title}</h2>
          <p>
            {data.description.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <button className="view-courses-button" onClick={handleViewCoursesClick}>
            Ver Cursos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
