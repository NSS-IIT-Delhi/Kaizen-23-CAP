import React, { useState, } from 'react';
import './Board.css'
import overallData from './Data/Overall.json'
import OneData from './Data/group1.json'
import TwoData from './Data/group2.json'
import ThreeData from './Data/group3.json'
import FourData from './Data/group4.json'
import FiveData from './Data/group5.json'
import SixData from './Data/group6.json'

const Winners = () => {
  const [leadersData, setLeadersData] = useState(overallData);
  const [searchName, setSearchName] = useState('');

  const getIcon = (index) => {
    switch (index) {
      case 1:
        return <i className="fas fa-award mr-2 " style={{color:'rgba(255, 99, 71, 0.85)'}}></i>;
      case 2:
        return <i className="fas fa-award mr-2 "style={{color:'rgba(0, 0, 255, 0.63)'}}></i>;
      case 3:
        return <i className="fas fa-award mr-2"style={{color:'rgba(128, 128, 128, 0.87)'}}></i>;
      default:
        return null;
    }
  };


  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = overallData.filter((leader) => leader.ReferralCode.toLowerCase().includes(searchName.toLowerCase()));
    setLeadersData(filtered)
    setSearchName("")
  };
  return (
    <div className="container">
      <h1 className='text-center mt-4' style={{fontFamily : "Meriweather"}}>Results</h1>
      <hr/>

        <div class="row justify-content-center">
          <div class="col-3 text-center pt-4">
            <svg fill="#C0C0C0"  width="100px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
            <div class="pt-2" style={{"font-size":"20px"}}>2nd</div>
            <div class="" style={{"font-size":"16px"}}>Kriti Sharma</div>
            <div class="" style={{"font-size":"16px"}}>KZN320162</div>
            <div class="" style={{"font-size":"16px"}}>150000</div>
            </div>
            <div class="col-3 text-center pb-4">
            <svg fill="#FFD700"  width="100px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
            <div class="pt-2" style={{"font-size":"20px"}}>1st</div>
            <div class="" style={{"font-size":"16px"}}>Pratik Kumar</div>
            <div class="" style={{"font-size":"16px"}}>KZN360747</div>
            <div class="" style={{"font-size":"16px"}}>154950</div>
            </div>
            <div class="col-3 text-center pt-4">
            <svg fill="#CD7F32" width="100px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
            <div class="pt-2" style={{"font-size":"20px"}}>3rd</div>
            <div class="" style={{"font-size":"16px"}}>Aashi</div>
            <div class="" style={{"font-size":"16px"}}>KZN360740</div>
            <div class="" style={{"font-size":"16px"}}>86900</div>
            </div>

            </div>

        {/* <div className="d-flex justify-content-between mb-1 w-96 m-auto">
        <div className=''>
          <button className="text-dark mx-3 btns mb-3" onClick={() => setLeadersData(overallData)} style={{backgroundColor:"aquamarine"}}>Overall</button>
            <button key={OneData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(OneData)}>Group 1</button>
            <button key={TwoData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(TwoData)}>Group 2</button>
            <button key={ThreeData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(ThreeData)}>Group 3</button>
            <button key={FourData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(FourData)}>Group 4</button>
            <button key={FiveData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(FiveData)}>Group 5</button>
            <button key={SixData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(SixData)}>Group 6</button>
        </div>

      </div> */}
      {/* <div className="d-flex justify-content-between mb-1">
          <div className="update">
           <p>Last Updated on: 12th April 2023</p> 
          </div>          
          <form onSubmit={handleSearch} >
            <input type="text" placeholder="Search by Referral" value={searchName} onChange={(e) => setSearchName(e.target.value)} className="form-control search  mr-1" />
          </form></div> */}
      <table className="table table-borderless mt-3" style={{width:"94.5%"}}>
        <thead>
          <tr style={{color:"white"}}>
            <th> <h4>Group</h4></th>
            <th><h4>Name</h4> </th>
            <th> <h4>Referral Code</h4></th>
            <th><h4>Score</h4> </th>
          </tr>
        </thead>
        <tbody>
              <tr className="trow" style={{ marginBottom: '10px !important' }}>
                <td>1</td>
                <td className="p-3">Fahad Afaque</td>
                <td className="p-3">KZN310042</td>
                <td className="p-3 ">41100</td>
              </tr>
              <tr className="trow" style={{ marginBottom: '10px !important' }}>
                <td>2</td>
                <td className="p-3">Kriti Sharma</td>
                <td className="p-3">KZN320162</td>
                <td className="p-3 ">150000</td>
              </tr>
              <tr className="trow" style={{ marginBottom: '10px !important' }}>
                <td>3</td>
                <td className="p-3">Naman</td>
                <td className="p-3">KZN330398</td>
                <td className="p-3 ">60225</td>
              </tr>
              <tr className="trow" style={{ marginBottom: '10px !important' }}>
                <td>4</td>
                <td className="p-3">Parakh Khanchandani	</td>
                <td className="p-3">KZN341066</td>
                <td className="p-3 ">41000</td>
              </tr>
              <tr className="trow" style={{ marginBottom: '10px !important' }}>
                <td>5</td>
                <td className="p-3">Samiksha</td>
                <td className="p-3">KZN350596</td>
                <td className="p-3 ">84525</td>
              </tr>
              <tr className="trow" style={{ marginBottom: '10px !important' }}>
                <td>6</td>
                <td className="p-3">Pratik Kumar</td>
                <td className="p-3">KZN360747</td>
                <td className="p-3 ">154950</td>
              </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Winners;

// import React, { useState } from 'react';
// import './Board.css'
// import LeadersData from './LeadersData';
// const Board = () => {

//   const [leaders, setLeaders] = useState(LeadersData);
//   // leaders.sort((a, b) => b.score - a.score);
//   const states = ['Overall', 'One', 'Two','Uttar Pradesh','Three','Five'];
//   const [stateLeaders, setstateLeaders] = useState({});
//   const [searchName, setSearchName] = useState('');

//   const handleFilterBystate = (state) => {
//     if(state === "Overall") handleResetFilter();
//     else{const filtered = leaders.filter((leader) => leader.state === state)
//       // .sort((a, b) => b.score - a.score);
//     setstateLeaders({ [state]: filtered });}
//   };

//   const handleResetFilter = () => {
//     setstateLeaders({});
//   };
//   const getIcon = (index) => {
//     switch (index) {
//       case 0:
//         return <i className="fas fa-award mr-2 " style={{color:'rgba(255, 99, 71, 0.85)'}}></i>;
//       case 1:
//         return <i className="fas fa-award mr-2 "style={{color:'rgba(0, 0, 255, 0.63)'}}></i>;
//       case 2:
//         return <i className="fas fa-award mr-2"style={{color:'rgba(128, 128, 128, 0.87)'}}></i>;
//       default:
//         return null;
//     }
//   };


//   const handleSearch = (e) => {
//     e.preventDefault();
//     const filtered = leaders.filter((leader) => leader.Referral.toLowerCase().includes(searchName.toLowerCase()));
//     setstateLeaders({ searched: filtered });
//     setSearchName("")
//   };
//   return (
//     <div className="container">
//       <h1 className='text-center mt-4' style={{fontFamily : "Meriweather"}}>LeaderBoard</h1>
//       <hr/>

//         <div className="d-flex justify-content-between mb-1 w-96 m-auto">
//         <div>
//           {/* <button className="text-dark mx-3 mb-3 btns" onClick={handleResetFilter} style={{backgroundColor:"aquamarine"}}>Overall</button> */}
//           {states.map((state) => (
//             <button key={state} className=" btn-secondary btns mx-3 mb-3" onClick={() => handleFilterBystate(state)}>{state}</button>
//           ))}
//         </div>

//       </div>
//       <div className="d-flex justify-content-between mb-1">
//           <div className="update">
//            <p>Last Updated on: 21st February</p> 
//           </div>          
//           <form onSubmit={handleSearch} >
//             <input type="text" placeholder="Search by name" value={searchName} onChange={(e) => setSearchName(e.target.value)} className="form-control search  mr-1" />
//           </form></div>
//       <table className="table table-borderless mt-3" style={{width:"94.5%"}}>
//         <thead>
//           <tr style={{color:"white"}}>
//             <th> <h4>Rank</h4></th>
//             <th> <h4>Referral Code</h4></th>
//             <th><h4>Name</h4> </th>
//             <th><h4>Score</h4> </th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(stateLeaders).length > 0 ? (
//             Object.entries(stateLeaders).map(([state, leaders]) => (
//               leaders.map((leader, index) => (
//                 <tr key={index} className="trow" style={{ marginBottom: '10px !important' }}>
//                 <td>{getIcon(index)}<span style={{marginLeft : "5%"}}>{leader.rank}</span></td>
//                   <td className="p-3">{leader.Referral}</td>
//                   <td className="p-3">{leader.name}</td>
//                   {/* <td className="p-3">{'⭐️'.repeat(leader.stars)}{'★'.repeat(5-leader.stars)}</td> */}
//                   <td className="p-3 ">{leader.score}</td>
//                 </tr>
//               ))
//             )).flat()
//           ) : (
//             leaders.map((leader, index) => (
//               <tr key={index} className="trow" style={{ marginBottom: '10px !important' }}>
//                 <td>{getIcon(index)}<span style={{marginLeft : "5%"}}>{leader.rank}</span></td>
//                 <td className="p-3">{leader.Referral}</td>
//                 <td className="p-3">{leader.name}</td>
//                 {/* <td className="p-3">{'⭐️'.repeat(getStars(index))}{'★'.repeat(5-getStars(index))}</td> */}
//                 <td className="p-3 ">{leader.score}</td>
//               </tr>

//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Board;
