import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Navbar from './Navbar';
// import SceneViewer from './SceneViewer';
import { Disclosure } from "@headlessui/react";
import DropDown from './Helpers/Dropdown';
import LectureData from '../data/lectures.json'



function Lectures() {
  return (
    <div>
      <section id="lectures">
        <div className="max-w-5xl mx-auto px-6 pt-32">
           <img className='pb-24' src='/fall23-site/divider.png'></img>
          <h1 className="text-indigo-900 text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500 neon-text-yellow">
            Lectures
          </h1>
          <div className="text-sm md:text-base text-indigo-900">
            <p>Every project, homework, and lab should be turned in via Gradescope. Every assignment will be available by 11:59 pm ET on the day listed, and will be due at 11:59 pm ET on the due date listed. Written assignments should be submitted as PDFs. All assignment release and due dates are also available through the course calendar. The assignment dates currently listed are tentative and may change. If any dates are shifted, an EdStem announcement will be made informing you of the change.</p>
            <table className="table">
              <thead>
                <tr className="table-header text-violet-500">
                  <th>Topic</th>
                  <th>Date</th>
                  <th>Code</th>
                  <th>Reading</th>
                </tr>
              </thead>
              <tbody>
                {LectureData && LectureData.map(lecture => {
                  return (
                    <tr key={lecture.id}>
                      <td className="py-3 text-violet-500">
                        <a href={lecture.notes} target="_blank" className="inline-flex items-center assignment-link">
                          <b>{lecture.topic}</b>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                        </a>
                      </td>
                      <td>{lecture.date}</td>
                      <td><a className='hover:text-violet-500' href={lecture.code}>{lecture.code ? 'Livecode' : ''}</a></td>
                      <td>{lecture.reading ? lecture.reading : 'N/A'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Lectures;
