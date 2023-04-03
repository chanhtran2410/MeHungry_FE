import React, {useState, useEffect} from "react"

const Table = (props) =>{
  const Cwhite = "white"
  const Corange = "rgba(255, 200, 50,0.6)"
  const Cyellow = "rgba(255, 200, 50,0.6)"
  const Cgreen = "rgba(255, 200, 50,0.6)"

  const [color, setColor] = useState("white")
  const [free, setFree] = useState(props.free)
  const [paying, setPaying] = useState(props.paying)
  // let color = ""

  const handleClick = () => {
    props.setSel(props.idn)
    // if (free == true) {setColor(Corange);}
    // else if (paying == false) {setColor(Cgreen);}
    // else {setColor(Cwhite);}


    
    // else setColor("white")
    // setFree(free == false)
  }

  useEffect(() => {
    // setFree(props.free)
    if (free == false) setColor(Corange)
    else {
      if (paying == false) setColor(Cgreen)
      setColor(Cwhite)
    }
    // props.setSel(props.idn, props.free)
  }, [])

  const buttonStyles = {
    background : color,
    width: '100px',
    height: '100px',
    borderRadius: '15px',
    position: 'absolute',
    fontSize: '50px',
    fontFamily: 'Roboto Condensed',
    fontWeight: 'bold',
    borderWidth: '1px',
    top: (((props.idn-((props.idn-1)%4)-1)/4)*140 + 127) + 'px',
    left: (((props.idn-1)%4)*140 + 80) + 'px',
    boxShadow: '5px 10px 18px #acacac',
  }

    return(
        <div className="Table">
            <button style={buttonStyles}  onClick={handleClick}>{props.idn}</button>
        </div>
    )
  }

export default Table