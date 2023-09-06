import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Navbar from './Navbar';
// import SceneViewer from './SceneViewer';
import { Disclosure } from "@headlessui/react";
import DropDown from './Helpers/Dropdown';
import LectureData from '../data/lectures.json'



function Calendar() {
  return (
    <section id="calendar">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500 text-indigo-900">Calendar</h1>
          <div className="text-sm md:text-base text-indigo-900">
            <p>Every project, homework, and lab should be turned in via Gradescope. Every assignment will be available by 11:59 pm ET on the day listed, and will be due at 11:59 pm ET on the due date listed. Written assignments should be submitted as PDFs. All assignment release and due dates are also available through the course calendar. The assignment dates currently listed are tentative and may change. If any dates are shifted, an EdStem announcement will be made informing you of the change.</p>
            <div className="row">

              <div className="col-md-12 py-6">
                <div className="hours-container">
                  <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=Y18wNGJmMjkwZjMzZGFjY2E5ZTYzMjE0ZjdmZDFkN2Q1MDVjZTI5OWE4ZGFmYTZmYzA0N2Y4NDRkZjExZGVmZjdiQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18xNzQ5OWFkZGM3NzFjZTRiZGIxOTc2N2IxM2RkNGYwMWIzNmYyZmMxMjY5Njg2MDhiZGJiYzY1ZjVmZWJmODRlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y182ODIyOTcwMDcyMDI0ZjQwNDExMGFhZDQzZmY1NTRmYjk5NzViYzNkOTI3YTQ1Yzg3OGFlMGQxNDFkOGUwZTI3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18wYWI5OGJkMzAxNzBlZDAzYjY5NmVmNzYzNDFkNGZmNTYwNmRiNDAwYWU1MDljNDM2MjcyNWQwNjQyMjMyNGQxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23b6b2cc&color=%23E67C73&color=%239E69AF&color=%237986CB" style={{ border: 'solid 1px #777' }} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
                </div>
                <h3 className="text-l md:text-md font-bold mt-6 text-violet-500"><b>Talk to Tim</b></h3>
                <p>
                  Talk to Tim via <a href="https://brown.zoom.us/my/tim.browncs"><b>Zoom</b></a> on Monday from <b>12
                  PM–12:50 PM EST.</b>
                  Tim will also be holding an info session during the first week of class on Friday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Calendar;
