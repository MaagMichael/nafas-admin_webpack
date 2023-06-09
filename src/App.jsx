import React from "react";
import { useState } from "react";

import "./App.css";

// import pages from components folder
import { Detail } from "./components/Detail";

// read in database
import Dishes from "./data.json";

function App() {
  const [detailInfo, setDetailInfo] = useState({});

  // const infoDetail = (key) => {alert("You clicked dish ID " + key); };

  // get object of picked dish id and toggle UseState of modal show/no-show
  const Details = (dishInfo) => {
    // transfer object into useState to display details
    setDetailInfo(dishInfo);
    // console.log(detailInfo);
  };

  return (
    <div className="App">
      <div className="card_area">
        <div className="card_box">
          {Dishes &&
            Dishes.map((dish) => {
              return (
                <div
                  key={dish.id}
                  className="card_container"
                  // take object by id(key) of picked dish and send to modal function
                  onClick={() => Details(Dishes[dish.id])}
                >
                  <img src={dish.URL} className="card_image" alt="dish" />

                  <div className="card_overlay">{dish.name}</div>
                </div>
              );
            })}
        </div>
      </div>

      <div class="details">
        {/* <h1>Page for card details ...</h1> */}
        <Detail detailInfo={detailInfo} />
      </div>

    </div>
  );
}

export default App;
