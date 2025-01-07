import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Dashboard() {
  const [lectures, setLectures] = useState([
    {
      id: 1,
      subject: "Mathematics-1",
      teacher: "Mr. Smith",
      rating: 4,
      content: "Introduction to Algebra...",
    },
    {
      id: 2,
      subject: "Discrete Structure",
      teacher: "Ms. Johnson",
      rating: 2,
      content: "World War II overview...",
    },
    {
      id: 3,
      subject: "Basic Electronics",
      teacher: "Mr. Smith",
      rating: 4,
      content: "Introduction to Algebra...",
    },
    {
      id: 4,
      subject: "Natural Language Processing",
      teacher: "Ms. Johnson",
      rating: 1,
      content: "World War II overview...",
    },
    {
      id: 5,
      subject: "Mathematics-2",
      teacher: "Mr. Smith",
      rating: 3,
      content: "Introduction to Algebra...",
    },
    {
      id: 6,
      subject: "History",
      teacher: "Ms. Johnson",
      rating: 5,
      content: "World War II overview...",
    },
    {
      id: 7,
      subject: "History",
      teacher: "Ms. Johnson",
      rating: 3,
      content: "World War II overview...",
    },
  ]);

  const [selectedLecture, setSelectedLecture] = useState(null);
  const [summary, setSummary] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSummarize = async (lecture) => {
    const response = await axios.post("http://localhost:5000/api/summarize", {
      content: lecture.content,
    });
    setSummary(response.data.summary);
    setSelectedLecture(lecture);
  };

  const handleGenerateQuestions = async (lecture) => {
    const response = await axios.post(
      "http://localhost:5000/api/generate-questions",
      { content: lecture.content }
    );
    setQuestions(response.data.questions);
    setSelectedLecture(lecture);
  };

  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <Header/>

      <main className="container mx-auto p-6">
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full text-sm text-left bg-white border border-gray-200">
            <thead className="bg-blue-600 text-white uppercase">
              <tr>
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Teacher</th>
                <th className="px-6 py-4">Rating</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {lectures.map((lecture) => (
                <tr
                  key={lecture.id}
                  className="even:bg-blue-50 hover:bg-blue-100 transition"
                >
                  <td className="px-6 py-4">{lecture.subject}</td>
                  <td className="px-6 py-4">{lecture.teacher}</td>
                  <td className="px-6 py-4">
                    {"★".repeat(lecture.rating)}
                    {"☆".repeat(5 - lecture.rating)}
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      className="px-4 py-2 text-sm font-medium  text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg"
                      onClick={() => handleSummarize(lecture)}
                    >
                     Full Lecture
                    </button>
                    <button
                      className="px-4 py-2 text-sm font-medium  text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg"
                      onClick={() => handleSummarize(lecture)}
                    >
                      Summarize
                    </button>
                    <button
                      className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg"
                      onClick={() => handleGenerateQuestions(lecture)}
                    >
                      Generate Questions
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedLecture && (
          <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Details for {selectedLecture.subject}
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-700">Summary</h3>
              <p className="text-gray-700 mt-2">{summary || "No summary yet."}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Questions
              </h3>
              <ul className="mt-2 space-y-2">
                {questions.length > 0 ? (
                  questions.map((question, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg"
                    >
                      {question}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-700">No questions generated yet.</p>
                )}
              </ul>
            </div>
          </div>
        )}
      </main>

      <Footer/>
    </div>
  );
}

export default Dashboard;
