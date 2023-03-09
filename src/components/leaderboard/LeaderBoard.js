import React, { useState, } from 'react';
import './Board.css'
import overallData from './Data/Overall.json'
import OneData from './Data/group1.json'
import TwoData from './Data/group2.json'
import ThreeData from './Data/group3.json'
import FourData from './Data/group4.json'
import FiveData from './Data/group5.json'
import SixData from './Data/group6.json'

const Board = () => {
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
      <h1 className='text-center mt-4' style={{fontFamily : "Meriweather"}}>LeaderBoard</h1>
      <hr/>

        <div className="d-flex justify-content-between mb-1 w-96 m-auto">
        <div className=''>
          <button className="text-dark mx-3 btns mb-3" onClick={() => setLeadersData(overallData)} style={{backgroundColor:"aquamarine"}}>Overall</button>
            <button key={OneData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(OneData)}>Group 1</button>
            <button key={TwoData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(TwoData)}>Group 2</button>
            <button key={ThreeData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(ThreeData)}>Group 3</button>
            <button key={FourData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(FourData)}>Group 4</button>
            <button key={FiveData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(FiveData)}>Group 5</button>
            <button key={SixData.state} className=" btn-secondary btns mx-3 mb-3" onClick={() => setLeadersData(SixData)}>Group 6</button>
        </div>

      </div>
      <div className="d-flex justify-content-between mb-1">
          <div className="update">
           <p>Last Updated on: (9th March)</p> 
          </div>          
          {/* <form > */}
          <form onSubmit={handleSearch} >
            <input type="text" placeholder="Search by Referrel" value={searchName} onChange={(e) => setSearchName(e.target.value)} className="form-control search  mr-1" />
          </form></div>
      <table className="table table-borderless mt-3" style={{width:"94.5%"}}>
        <thead>
          <tr style={{color:"white"}}>
            <th> <h4>Rank</h4></th>
            <th> <h4>Referrel Code</h4></th>
            <th><h4>Name</h4> </th>
            <th><h4>Score</h4> </th>
          </tr>
        </thead>
        <tbody>
          {
            leadersData.map((leader) => (
              <tr key={leader.Rank} className="trow" style={{ marginBottom: '10px !important' }}>
                <td>{getIcon(leader.Rank)}<span style={{marginLeft : "5%"}}>{leader.Rank}</span></td>
                <td className="p-3">{leader.ReferralCode}</td>
                <td className="p-3">{leader.Name}</td>
                <td className="p-3 ">{leader.Score}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Board;

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
//     const filtered = leaders.filter((leader) => leader.referrel.toLowerCase().includes(searchName.toLowerCase()));
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
//             <th> <h4>Referrel Code</h4></th>
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
//                   <td className="p-3">{leader.referrel}</td>
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
//                 <td className="p-3">{leader.referrel}</td>
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
