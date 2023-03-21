const element = (
  // Write your code here.
  <div className="bg_container">
    <div>
      <h1 className="main_heading">Congratulations</h1>
      <div className="card_ctainer">
        <img
          className="profile_image"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        />
        <h1 className="card_heading_name">Kiran V</h1>
        <p className="school_heading">
          Vishnu institute of Computer Education and Technology Bhimravam.
        </p>
        <img
          className="watch_image"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
