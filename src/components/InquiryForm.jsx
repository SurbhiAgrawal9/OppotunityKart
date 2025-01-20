// import React from 'react';
// import { Send } from 'lucide-react';
// import emailjs from "@emailjs/browser";

// const template = `
// Subject: New Inquiry from {name}

// Body:
// Hi,

// You have received a new inquiry:

// Name: {name}
// Email: {email}
// Message: {message}

// Best regards,
// Your Website
// `;


// function LandingPageInquiryForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "subhuagrawal786@gmail.com", // Replace with your EmailJS service ID
//         template , // Replace with your EmailJS template ID
//         formData,
//         "1234" // Replace with your EmailJS public key
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully:", response.text);
//           setStatus("Your inquiry has been sent successfully!");
//           setFormData({ name: "", email: "", message: "" }); // Reset form
//         },
//         (error) => {
//           console.error("Failed to send email:", error);
//           setStatus("Failed to send your inquiry. Please try again later.");
//         }
//       );
//   };
// export default function InquiryForm() {
//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-2xl mx-auto text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
//           <p className="text-gray-600">Have questions? We're here to help with your career journey.</p>
//         </div>
        
//         <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="John Doe"  onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="john@example.com"  onChange={handleChange}
//               />
//             </div>
//           </div>
          
//           <div className="mb-6">
//             <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//               Contact 
//             </label>
//             <input
//               type="number"
//               id="subject"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Phone Number"  onChange={handleChange}
//             />
//           </div>
          
//           <div className="mb-6">
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows="4"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Your message..."  onChange={handleChange}
//             ></textarea>
//           </div>
          
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
//          >
//             <Send className="w-4 h-4 mr-2" />
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from "@emailjs/browser";

const templateId = "template_q3h8gog"; // Replace with your actual EmailJS template ID
const serviceId = "service_o7rjwuk";   // Replace with your actual EmailJS service ID
const publicKey = "9-1pxYkicENoobn_y";   // Replace with your actual EmailJS public key

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [status, setStatus] = useState("");
  // const [number, setNumber] = useState('0');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData({...formData, message: "number :" + number + "\n" + message})
    setFormData(prevData => ({
      ...prevData,
      message: "number: " + String(number) + "\n" + message
    }));
    
    console.log("Merged Message: ", "number: " + String(number) + "\n" + message);
    console.log("Form data:", formData); //add kiya

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(
        (response) => {
          console.log("Email sent successfully:", response.text);
          setStatus("Your inquiry has been sent successfully!");
          setFormData({ name: "", email: "", message: "" , number: ""}); // Reset form
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus("Failed to send your inquiry. Please try again later.");
        }
      );
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600">Have questions? We're here to help with your career journey.</p>
        </div>

        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=" Phone Number "
                onChange={handleChange}
                
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
      </div>
    </section>
  );
}

export default InquiryForm;
