import { useState, useRef, useEffect } from 'react'
import './App.css'
import { Popover, Radio } from "antd";
import moment from 'moment';


function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedRange, setselectedRange] = useState("");

  const [tabs, setTabs] = useState(["Date", "Range", "Weeks", "Months"]);
  const [ranges, setRanges] = useState(["Current Month", "Next 30 Days", "Next 60 Days", "Next 90 Days", "Custom"]);

  const [tab, setTab] = useState("Range");


  const handleTabChange = (event) => {
    setTab(event.target.value);
  };
  const handleRangeChange = (event) => {
    setselectedRange(event.target.value);
  };

  useEffect(() => {
    setStartDate(moment().format("ddd, MMM, DD"))
    setEndDate(moment().format("ddd, MMM, DD"))
  })

 

  return (
    <div>
      <Popover
        placement="bottomLeft"
        title=""
        trigger="click"
        content={
          <>
          <Radio.Group
            onChange={handleTabChange}
            value={tab}
            style={{
              marginBottom: 8,
            }}
          >
            {tabs.map(item => {
              return (
                <Radio.Button value={item}>{item}</Radio.Button>
              )
            })}
          </Radio.Group>
          <div>
          {tab == "Range" ? 
          <Radio.Group value={selectedRange} onChange={handleRangeChange}>
            {ranges.map(item => {
              return(
              <div><Radio  value={item}>{item}</Radio></div>
              )
            })}
          </Radio.Group> : ""
          }
          </div>
          </>
        }
        >
        <div className="date">{startDate} - {endDate}</div>
      </Popover>
    </div>
  )
}

export default App
