import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import "../styles.css"

export default function Home() {
    return (
        <div>
            <Navbar />
            <section>
    <div className="title">
      <h1><i className="fas fa-book-open"></i>School Work</h1>
    </div>
    <div className="wrapper">
      <div className="subjectBox box-1">
        <a href="#">Data Structures</a>
        <div className="editDelete">
          <a href="#"><i className="make-changes fas fa-pencil-alt"></i></a>
          <a href="#"><i className="make-changes fas fa-trash"></i></a>
        </div>
        <ul className="subhead">
          <li>Assignments due: 1</li>
          <li>Upcoming tests: None</li>
        </ul>
      </div>
      <div className="subjectBox box-2">
        <a href="#">Mathematics</a>
        <div className="editDelete">
          <a href="#"><i className="make-changes fas fa-pencil-alt"></i></a>
          <a href="#"><i className="make-changes fas fa-trash"></i></a>
        </div>
        <ul className="subhead">
          <li>Assignments due: None</li>
          <li>Upcoming tests: None</li>
        </ul>
      </div>
      <div className="subjectBox box-3">
        <a href="#">Computer Organization</a>
        <div className="editDelete">
          <a href="#"><i className="make-changes fas fa-pencil-alt"></i></a>
          <a href="#"><i className="make-changes fas fa-trash"></i></a>
        </div>
        <ul className="subhead">
          <li>Assignments due: None</li>
          <li>Upcoming tests: 1</li>
        </ul>
      </div>
      <div className="subjectBox box-4">
        <a href="#">All Assignments</a>
        <div className="editDelete">
          <a href="#"><i className="make-changes fas fa-pencil-alt"></i></a>
          <a href="#"><i className="make-changes fas fa-trash"></i></a>
        </div>
        <ul className="subhead">
          <li>Total assignments due: 2</li>
        </ul>
      </div>
      <div className="subjectBox box-5">
        <a href="#">Grades</a>
        <div className="editDelete">
          <a href="#"><i className="make-changes fas fa-pencil-alt"></i></a>
          <a href="#"><i className="make-changes fas fa-trash"></i></a>
        </div>
        <ul className="subhead">
          <li>Total Upcoming tests: 2</li>
        </ul>
      </div>
      <div className="subjectBox box-6">
        <a href="#">OOPD</a>
        <div className="editDelete">
          <a href="#"><i className="make-changes fas fa-pencil-alt"></i></a>
          <a href="#"><i className="make-changes fas fa-trash"></i></a>
        </div>
        <ul className="subhead">
          <li>Assignments due: 1</li>
          <li>Upcoming tests: None</li>
        </ul>
      </div>
      <div className="subjectBox box-7">
        <a href="#">Logic Design</a>
        <div className="editDelete">
          <a href="#"><i className="make-changes fas fa-pencil-alt"></i></a>
          <a href="#"><i className="make-changes fas fa-trash"></i></a>
        </div>
        <ul className="subhead">
          <li>Assignments due: None</li>
          <li>Upcoming tests: 1</li>
        </ul>
      </div>
    </div>
  </section>
  <div className="make-changes-div">
    <a href="#"><i className="make-changes fas fa-plus"></i></a>
  </div>
  <section>
    <div class="container-fluid">


    <div class="studentLoan">
      <h1><i class="fas fa-calculator"></i>Loan Debt Calculator</h1>
      <form class="loanForm" action="index.html" method="post">
        <div class="formbox row">
          <div class="col formleft">
            <label for="principal">Loan Amount Borrowed</label>
            <input type="number" class="form-control" name="principal" id="principal" /> 

            <label for="interest">Interest Rate</label>
            <input type="number" class="form-control" name="interest" id="interest" />

            <label for="duration">Total Duration (In Years)</label>
            <input type="number" class="form-control" name="duration" id="duration" />

            <label for="margin">Margin Money</label>
            <input type="number" class="form-control" name="margin" id="margin" />

            <label for="moratorium">Moratorium Period</label>
            <input type="number" class="form-control" name="moratorium" id="moratorium" />
          </div>
          <div class="col formright">
            <label for="paystatus">Payment Status</label>
            <select id="status" class="form-control" name="Payment Status">
              <option value="Start">Payment started</option>
              <option value="notStart">Payment not started</option>
            </select>

            <label for="mpaystatus1">Payment started from moratorium period or not</label>
            <select id="status" class="form-control" name="Payment Status MP">
              <option value="Start">Payment started</option>
              <option value="notStart">Payment not started</option>
            </select>

            <label for="mpinterest2">Interest Paid during Moratorium Period</label>
            <select id="status" class="form-control" name="Payment Status">
              <option value="Start">Yes</option>
              <option value="notStart">No</option>
            </select>

            <label for="currentyr">Current Year (Of Total Duration)</label>
            <input type="number" class="form-control" name="currentyr" id="currentyr" />
            <input type="submit" class="btn btn-outline-light btn-lg submit-btn" name="enter" value="Enter" />
          </div>
          <div class="col formdisplay">
            <p>Total Debt Payable</p>
            <output name="result">₹ 0</output>
            <p>Monthly Debt Payable</p>
            <output name="result">₹ 0</output>
            <p>Current Debt Payable</p>
            <output name="result">₹ 0</output>
          </div>
        </div>
        </form>
        </div>
    </div>
  </section>
 
       
        <Sidebar />
        </div>
    )
}
