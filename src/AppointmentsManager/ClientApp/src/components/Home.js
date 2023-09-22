import { Delete } from "./Delete"
import { Edit } from "./Edit"
import { New } from "./New"
import "../custom.css";
import Appointment from "./Appointment";
import { testData } from "./Lib"
import { useEffect } from "react";
import { useState } from "react";

export default function Home(props) {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(testData)
  }, [])
  return (
    <main>
      <h1>Manage Your Appointments / Dates very easy</h1>
      <p>This powerful web application helps you to menage your dates very easy.</p>
      <div className="add-btn row items-center content-center">
        <div className="btn add">+</div>
      </div>

      <div className="notifications spacer-20">This is a test TEXT</div>

      <section className="row justify-btw items-center filter">
        <div className="modal-title">Filter</div>
        <div className="row items-center filter-items">
          <button className="me-15">Clear Filters</button>
          <div>
            <label htmlFor="All_f">All</label><br />
            <input type="checkbox" name="All_f" id="All" />
          </div>

          <div>
            <lable htmlFor="Done_f">Done</lable><br />
            <input type="checkbox" name="Done_f" id="Done" />
          </div>

          <div>
            <lable htmlFor="Deleted_f">Deleted</lable><br />
            <input type="checkbox" name="Deleted_f" id="Deleted" />
          </div>
          <div>
            <lable htmlFor="period">Period</lable><br />
            <select name="period" id="period" defaultValue={"4"}>
              <option value="5" disabled>Period</option>
              <option value="4" disabled>Default</option>
              <option value="1" disabled>Today</option>
              <option value="2" disabled>This Week</option>
              <option value="3" disabled>Last Week</option>
            </select>
          </div>

          <dvi>
            <lable htmlFor="SpecifiedDate">Specified Date</lable><br />
            <input type="date" name="SpecifiedDate" id="SpecifideDate" />
          </dvi>

          <dvi>
            <lable htmlFor="SpecifiedTime">Specified Time</lable><br />
            <input type="time" name="SpecifiedTime" id="SpecifiedTime" />
          </dvi>

          <div>
            <label htmlFor="LevelOfImportance_f">Level Of Importance</label><br />
            <select name="LevelOfImportance" id="LevelOfImportance_f" defaultValue={8}>
              <option value={8} disabled>Level Of Importance</option>
              <option value={9} disabled>Reset</option>
              <option value={5} disabled>Very High</option>
              <option value={4} disabled>High</option>
              <option value={3} disabled>Medium</option>
              <option value={2} disabled>Normal</option>
              <option value={1} disabled>Low</option>
              <option value={0} disabled>Very Low</option>
            </select>
          </div>
        </div>
      </section>

      <div className="row underline hdr">
        <div className="column id">#</div>
        <div className="column title">Title</div>
        <div className="column description">Description</div>
        <div className="column importance">Importance</div>
        <div className="column date">Date</div>
        <div className="column time">Time</div>
        <div className="column address">Address</div>
        <div className="column edit">Edit</div>
        <div className="column delete">Delete</div>
      </div>

      {
        dataList.length === 0 ?
          <div className="row mt-15 witing">Loading<div className="loading">...</div></div> :
          dataList.map(item => <Appointment item={item} key={item.id} />)
      }
      <New />
      <Edit />
      <Delete />
    </main>
  )
}