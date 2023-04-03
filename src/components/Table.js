import React, {useState, useEffect} from "react"

const Table = (props) =>{
  const [color, setColor] = useState("white")

  const [free, setFree] = useState(props.free)

  const handleClick = () => {
    if (free == true) setColor("orange")
    else setColor("white")
    setFree(free == false)
  }

  useEffect(() => {
    // setFree(props.free)
    if (free == false) setColor("orange")
    else setColor("white")
  }, [])

  const buttonStyles = {
    background : color,
    width: '119px',
    height: '119px',
    borderRadius: '15px',
    position: 'absolute',
    fontSize: '50px',
    fontFamily: 'Roboto Condensed',
    fontWeight: 'bold',
    borderWidth: '0px',
    top: (((props.id-((props.id-1)%4)-1)/4)*153 + 147) + 'px',
    left: (((props.id-1)%4)*153 + 30) + 'px',
  }

    return(
        <div className="Table">
            <button style={buttonStyles}  onClick={handleClick}>{props.id}</button>
        </div>
    )
  }

export default Table