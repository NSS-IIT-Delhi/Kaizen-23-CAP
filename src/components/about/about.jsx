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
                    <div className="hrx" style={{width:"60%", margin : "auto"}}>
                        <hr />
                        Kaizen, IIT Delhi's social annual fest, is proud to announce the launch of its Campus Ambassador Program. The program is designed to bring together enthusiastic students from across the campus to serve as ambassadors for the event and spread awareness about its objectives and activities. As a campus ambassador, you will have the opportunity to be part of a dynamic team and gain valuable leadership and communication skills.
<br />
<br />
                        The main objectives of Kaizen are to promote a culture of continuous improvement and encourage students to take active steps towards creating a better world. The event will include workshops, seminars, and competitions that will challenge participants to think creatively and come up with innovative solutions to real-world problems.
<br />
<br />
                        By participating in the Campus Ambassador Program, you will not only get a chance to contribute to the success of the event but also gain valuable experience and exposure. If you are passionate about making a positive impact and have a desire to grow as a leader, then this is the perfect opportunity for you.
                    </div>
                </div>
                <br />
            </section>
        </div>
    )
}

export default Contact
