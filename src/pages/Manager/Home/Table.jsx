import React, {useState, useEffect} from "react"

const Table = (props) =>{


  const [color, setColor] = useState("white")
  const [free, setFree] = useState(props.free)
  const [paying, setPaying] = useState(props.paying)
  // const [buttonStyles, setButtonStyles] = useState(
  //   {
  //     background : props.color,
  //     width: '100px',
  //     height: '100px',
  //     borderRadius: '15px',
  //     position: 'absolute',
  //     fontSize: '50px',
  //     fontFamily: 'Roboto Condensed',
  //     fontWeight: 'bold',
  //     borderWidth: '1px',
  //     top: (((props.idn-((props.idn-1)%4)-1)/4)*140 + 127) + 'px',
  //     left: (((props.idn-1)%4)*140 + 80) + 'px',
  //     boxShadow: '5px 10px 18px #acacac',
  //   }
  // )
  // let color = ""

  let buttonStyles = ({
    background : props.color,
    top: (((props.idn-((props.idn-1)%4)-1)/4)*140 + 100) + 'px',
    left: (((props.idn-1)%4)*145 + 80) + 'px',
  })

  const handleClick = () => {
    props.setSel(props.idn)
    if (props.free == 0 || props.free == 1) props.setTog(false)
    else props.setTog(true)
    props.setStat(props.free)

    // if (props.free == 0) setColor(Cwhite)
    // else if (props.free == 1) setInterval(function () {
    //           if (color == Cwhite) {setColor(Corange)}
    //           else {setColor(Cwhite)}
    //         }, 2000);
    // else if (props.free == 2) setColor(Corange)
    // else setColor(Cgreen)
  }

  // const recursiveTimer = () => {
  
  // }

  useEffect(() => {
    // props.setSel(props.idn)
    // setInterval(function () {
    //   if (props.free == 0) setColor(Cwhite)
    //   else if (props.free == 1) setInterval(function () {
    //     if (color == Cwhite) {setColor(Corange)}
    //     else {setColor(Cwhite)}
    //   }, 1000);
    //   else if (props.free == 2) setColor(Corange)
    //   else setColor(Cgreen)
    // }, 4000);

    // setButtonStyles({
    //   background : props.color,
    //   width: '100px',
    //   height: '100px',
    //   borderRadius: '15px',
    //   position: 'absolute',
    //   fontSize: '50px',
    //   fontFamily: 'Roboto Condensed',
    //   fontWeight: 'bold',
    //   borderWidth: '1px',
    //   top: (((props.idn-((props.idn-1)%4)-1)/4)*140 + 127) + 'px',
    //   left: (((props.idn-1)%4)*140 + 80) + 'px',
    //   boxShadow: '5px 10px 18px #acacac',
    // })
  }, [])


  // {
  //   animation:blinking 1.5s infinite;
  //   font-size: 20px;
  //   }
  //   @keyframes blinking{
  //   0%{   color: red;   }
  //   47%{   color: #000; }
  //   62%{   color: transparent; }
  //   97%{   color:transparent; }
  //   100%{  color: #000;   }
  //   }

    return(
        <div className="Table">
            <button style={buttonStyles} /*background-color={props.color}*/ onClick={handleClick}>{props.idn}</button>
        </div>
    )
  }

export default Table