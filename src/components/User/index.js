import React from 'react'

function User({name,desc,img}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={img}
        className="card-img-top"    
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {desc}
        </p>
        <a href="!#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  )
}

export default User