import React from "react";

const testimonials = [
  {
    id: 1,
    author: "John Doe",
    position: "CEO, Company A",
    content:
      "On behalf of my wife, who was a patient in your hospital, I humbly submit my sincere gratitude to the management and staff of Jamaica Hospital, especially to your outstanding nurses and PCAs. They have been outstandingly helpful and provided a high quality of service, care and comfort to my wife. Thank you.",
  },
  {
    id: 2,
    author: "Navneet Smith",
    position: "CTO, Company B",
    content:
      "I am writing to express my gratitude from my family for the care given to my mother. In the SICU, there was care, compassion, and respect. A special thank you to your social workers as well; they provided professional guidance, comfort, and strength to make our own decisions. Finally, I cannot praise the Palliative Care and Hospice team enough. They were patient and helpful. All our hope that you continue along this path.",
  },
  {
    id: 3,
    author: "Jane Gupta",
    position: "CTO, Company C",
    content:
      "I am writing on behalf of my brother who was a patient in your hospital. I would like to thank you on behalf of my entire family for the help and consideration shown to me in what was a very difficult time. Again, I would like to thank you for the services you provide to patients and their families.",
  },
  {
    id: 4,
    author: "Shyam jain",
    position: "CTO, Company D",
    content:
      "My Experience at Jamaica Hospital was great. Everyone was nice and helpful. This was my third time giving birth at Jamaica Hospital each experience was different but this last time was great. Highly recommend giving birth here.",
  },
];

const TestimonialPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Patient Testimonials</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 p-6 rounded-md">
              <p className="text-lg mb-4">{testimonial.content}</p>
              <div className="text-right">
                <p className="text-xl font-bold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
