import React from "react";
import { useState, useEffect } from "react";
import "./progress-bar.css"
const Progressbar = ({ value, total }) => {
  const [Pwidth, setPWidth] = useState()
  const [progressW, setProgressW] = useState(0)
  const [rborder, setRBorder] = useState(false)

  document.addEventListener('DOMContentLoaded', () => {
    let resizer = new ResizeObserver(handleResize)
    resizer.observe(document.querySelector('.progress_bar'))
    
  })
  const handleResize = async(entries) => {
    let div = entries[0].target;
    setProgressW(div.offsetWidth)
  }
  useEffect(() => {
    checkNaN()
    if (!(value === total)) {
      setRBorder(false)
    } else {
      setRBorder(true)
    }
  })

const checkNaN = () => {
  if(isNaN(value * (progressW)/total) === false) {
    setPWidth(value * (progressW)/total)
  }
}


  return (
    <div>
      
      <div className="progress_bar">
        <div
          id={rborder ? "rborder" : "nrborder"}
          className="progress"
          style={{
            width: Pwidth,
          }}
        ></div>
      </div>
      <div className ="Total">
        Total: {value}/{total}
      </div>

    </div>
  );
  
};

export default Progressbar;
