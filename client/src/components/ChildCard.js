import React from "react";

function ChildCard(child) {
    return (

        // child = name of prop being passed in 
        // image, id, name, teacher, grade, onClick = named on ParentHome page

        <div className="card"
            onClick={() => child.onClick(child.id)}>
            {/* <img src={child.image} className="card-img-top" id={child.id} alt={child.name} /> */}
            <div className="card-body">
                <h4 className="card-text childgo-card-text">My Child's Name {child.name}</h4>
                <p>Teacher {child.teacher} - Grade {child.grade}</p>
            </div>
        </div>
    )
}

export default ChildCard;