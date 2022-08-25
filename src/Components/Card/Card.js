import React from 'react'

const Card = ({el,hello}) => {
    const newtitle=`${el.id}_${el.title}`
  return (
    <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={el.thumbnail} alt="nike-air-shoe" />
          </div>
          <div className="contentBx">
            <h2>{el.title}</h2>
            <div className="size">
              <h3>images details :</h3>
              {el.images.map((el , i) => <img style={{ width: "30px", height: "30px" }} key={i} src={el} alt="" />)}
            </div>
          </div>
        </div>
        <button onClick={()=>hello(newtitle)}>click me</button>
      </div>
  )
}

export default Card