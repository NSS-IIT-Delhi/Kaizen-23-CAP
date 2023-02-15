import React from 'react'
import './about.css'
const Contact = ({ id }) => {
    return (
        <div id={id}>
            <section id="about" className="section-padding wow fadeIn delay-05s animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="row1">
                    <h1 className="title-text text-gradient" style={{ color: " #b6ffc5" }} >
                        About Kaizen
                    </h1>
                    <div className="hrx">
                        <hr />
                        Kaizen, IIT Delhi's annual social celebration, is thrilled to inaugurate its Campus Ambassador Program. The initiative recruits motivated students from across campus to promote the event and its goals.
The main objectives of Kaizen are to promote a culture of continuous improvement and encourage students to take active steps towards creating a better world. <br /> <br /> If you are passionate about making a positive impact and have a desire to grow as a leader, then this is the perfect opportunity for you.
</div>
                </div>
                <br />
            </section>
        </div>
    )
}

export default Contact
