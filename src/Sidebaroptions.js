import React from 'react'
import './Sidebaroptions.css'
function Sidebaroptions({Icons,title}) {
    return (
        <div className="Options">
            {Icons && <Icons className ="Icons"/>}
          {Icons ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default Sidebaroptions
