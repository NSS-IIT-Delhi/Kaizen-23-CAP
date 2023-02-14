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
                                    fontSize: '100px', color: 'aquamarine'
                                }}><i class="fa-solid fa-building-columns"></i></p>
                                <h3>2500 +</h3>
                                <h3>Colleges</h3>
                            </center>
                        </div>
                        <div className='col-md-3 mt-5'>
                            <center style={{ lineHeight: '1' }}>
                                <p style={{
                                    fontSize: '100px', color: 'aquamarine'
                                }}><i class="fa-solid fa-user"></i></p>
                                <h3>7000 +</h3>
                                <h3>Applicants</h3>
                            </center>
                        </div>
                        <div className='col-md-3 mt-5'>
                            <center style={{ lineHeight: '1' }}>
                                <p style={{
                                    fontSize: '100px', color: 'aquamarine'
                                }}><i class="fa-solid fa-headset"></i></p>
                                <h3>5000 +</h3>
                                <h3>CAs Selected</h3>
                            </center>
                        </div>
                        <div className='col-md-3 mt-5'>
                            <center style={{ lineHeight: '1' }}>
                                <p style={{
                                    fontSize: '100px', color: 'aquamarine'
                                }}><i class="fa-sharp fa-solid fa-award"></i></p>
                                <h3>25 +</h3>
                                <h3>Awards</h3>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Stats