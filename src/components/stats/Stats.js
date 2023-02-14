import React, { useState } from 'react'
import './stats.css'

function Stats() {

    const [counter, setCounter] = useState(0);

    // const counterFunc = (minimum, maximum) => {
    //     for (let count = minimum; count <= maximum; count++) {
    //         setTimeout(() => {
    //             this.setState({ count })
    //         }, 1000);
    //     }
    // }
    // counter();


    return (
        <div className="stats container">
            <div>
                <div className='container'>


                    <div className='row'>
                        <div className='col-md-3 mt-5'>
                            <center style={{ lineHeight: '1' }}>
                                <p style={{
                                    fontSize: '70px', color: 'aquamarine'
                                }}><i class="fa-solid fa-building-columns"></i></p>
                                <h4>2500 +</h4>
                                <h4>Colleges</h4>
                            </center>
                        </div>
                        <div className='col-md-3 mt-5'>
                            <center style={{ lineHeight: '1' }}>
                                <p style={{
                                    fontSize: '70px', color: 'aquamarine'
                                }}><i class="fa-solid fa-user"></i></p>
                                <h4>7000 +</h4>
                                <h4>Applicants</h4>
                            </center>
                        </div>
                        <div className='col-md-3 mt-5'>
                            <center style={{ lineHeight: '1' }}>
                                <p style={{
                                    fontSize: '70px', color: 'aquamarine'
                                }}><i class="fa-solid fa-headset"></i></p>
                                <h4>5000 +</h4>
                                <h4>CAs Selected</h4>
                            </center>
                        </div>
                        <div className='col-md-3 mt-5'>
                            <center style={{ lineHeight: '1' }}>
                                <p style={{
                                    fontSize: '70px', color: 'aquamarine'
                                }}><i class="fa-sharp fa-solid fa-award"></i></p>
                                <h4>25 +</h4>
                                <h4>Awards</h4>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Stats