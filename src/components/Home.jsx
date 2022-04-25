export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  return (
    <>
      <h3 className="welcome" style={{color: 'salmon', textAlign:'center'}}>Welcome To employee management system</h3>
      <div className="home" style={{width:'500px', height:'20px', color: 'black', marginLeft:'500px', padding:'2px', backgroundColor:'gainsboro'}}>
        <span>Statistics</span>
        <div style={{width:'500px', height:'20px', color: 'black', padding:'2px'}}>
          Total Employees: <span className="totalemp"></span>
        </div>
        <div style={{width:'500px', height:'20px', color: 'black', padding:'2px', backgroundColor:'gainsboro'}}>
          Total Terminated: <span className="total_terminated"></span>
        </div>
        <div style={{width:'500px', height:'20px', color: 'black', padding:'2px'}}>
          Total Promoted: <span className="total_promoted"></span>
        </div>
        <div style={{width:'500px', height:'20px', color: 'black', padding:'2px', backgroundColor:'gainsboro'}}>
          Total New: <span className="total_new"></span>
        </div>
      </div>
    </>
  );
};
