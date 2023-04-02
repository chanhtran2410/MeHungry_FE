import React, {useState, useEffect} from "react"

const Table = (props) =>{
  const [color, setColor] = useState("white")

  const [free, setFree] = useState(props.free)

  const [paying, setPaying] = useState(props.paying)

  const handleClick = () => {
    let color = ""
    if (free == true) {setColor("orange"); color ="orange"}
    else if (paying == false) {setColor("green"); color ="green"}
    else {setColor("white"); color ="white"}
    // else setColor("white")
    // setFree(free == false)
    props.setSel(props.idn, props.free)
  }

  useEffect(() => {
    // setFree(props.free)
    if (free == false) setColor("orange")
    else {
      if (paying == false) setColor("green")
      setColor("white")
    }
    props.setSel(props.idn, props.free)
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
    borderWidth: '1px',
    top: (((props.idn-((props.idn-1)%4)-1)/4)*153 + 147) + 'px',
    left: (((props.idn-1)%4)*153 + 30) + 'px',
  }

    return(
        <div className="Table">
            <button style={buttonStyles}  onClick={handleClick}>{props.idn}</button>
        </div>
    )
  }

export default Table