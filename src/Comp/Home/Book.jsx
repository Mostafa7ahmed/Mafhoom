import React from 'react'

function Book(props) {
    return (
        <div className="Book">
            <img src={require("../../Image/book.webp")} alt="" />
            <h4>{props.subject}</h4>
            <span>ا / {props.name} </span>

        </div>
    )
}

export default Book