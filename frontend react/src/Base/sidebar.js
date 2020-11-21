import React from 'react'
import "../styles.css"

export default function Sidebar() {
    return (
        <div>
            <input type="checkbox" id="check" />
  <label for="check">
    <i className="fas fa-bars" id="btn"></i>
    <i className="fas fa-arrow-left" id="cancel"></i>
  </label>
  <div className="sidebar">
    <header><a href="#"><i className="logo fas fa-university"></i>Appname</a></header>
    <ul className="mainHead">
      <li><a href="#"><i className="fas fa-globe-asia"></i>Internships & Jobs</a></li>
    </ul>
    <ul className="mainHead">
      <li><a href="#"><i className="fas fa-book-open"></i>School Work</a></li>
    </ul>
    <ul className="mainHead">
      <li><a href="#"><i className="fas fa-calendar-alt"></i>Planner</a></li>
      <li><a href="#"><i className="fas fa-bookmark"></i>Post-its</a></li>
      <li><a href="#"><i className="fas fa-clipboard"></i>To-do List</a></li>
      <li><a href="#"><i className="fas fa-book"></i>Mathematics</a></li>
      <li><a href="#"><i className="fas fa-book"></i>Logic Design</a></li>
      <li><a href="#"><i className="fas fa-book"></i>Data Structures</a></li>
      <li><a href="#"><i className="fas fa-book"></i>OOPD</a></li>
      <li><a href="#"><i className="fas fa-book"></i>Computer Organization</a></li>
      <li><a href="#"><i className="fas fa-chart-bar"></i>Grades</a></li>
      <li><a href="#"><i className="fas fa-file-alt"></i>All Assignments</a></li>
    </ul>
    <ul className="mainHead">
      <li><a href="#"><i className="fas fa-money-bill-wave"></i>Student Loan</a></li>
    </ul>
  </div>
        </div>
    )
}
