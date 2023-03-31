import React, {useState, useEffect} from "react"
import "./Field.css"

const Field = (props) =>{
    const [intext, setIntext] = useState("New " + props.pretext)

    const changetext = (event) => {
        setIntext(event.target.value)
    }

    const cusStyle = {
        width: props.w + 'px',
        height: props.h + 'px',
        borderRadius: '15px',
        position: 'relative',
        fontSize: '20px',
        fontFamily: 'Roboto Condensed',
        borderWidth: '0px',
      }
      return(
          <div className="menuFrame">
              <h1 id="lable">{props.pretext}</h1>
              <input id="readname" style={cusStyle} type="text" value={intext} onChange={changetext}></input>
          </div>
      )
  }
  export default Field