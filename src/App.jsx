import React from "react";
import { useState } from "react";

import "./App.css";

// import pages from components folder
// import { Detail } from "./components/Detail";
import { DetailAdd } from "./components/DetailAdd";
// import { DetailEdit } from "./components/DetailEdit";
import { DetailEdit } from "./components/DetailEdit";

// read in database
import Dishes from "./data_admin.json";

function App() {
  const [detailInfo, setDetailInfo] = useState({});

  // const infoDetail = (key) => {alert("You clicked dish ID " + key); };

  // get object of picked dish id and toggle UseState of modal show/no-show
  const Details = (dishInfo) => {
    // transfer object into useState to display details
    setDetailInfo(dishInfo);
    // console.log(detailInfo);
  };
  const [buttonText, setButtonText] = useState("Edit Mode");
  const [editFlag, setEditFlag] = useState(true);
  const [addFlag, setAddFlag] = useState(false);

  const [filter, setFilter] = useState("");

  const filtering = (e) => {
    const keyword = e.target.value.toLowerCase();
    setFilter(keyword);
    console.log(keyword);
  };

  const edit_mode = (id) => {
    // alert("You want to edit id:" + id);
    if (buttonText === "Edit Mode") {
      setButtonText("Save Mode");
      setEditFlag(false);
      // remove read only
    } else {
      setButtonText("Edit Mode");
      setEditFlag(true);
      // put on readonly
      // store changes in json file
    }
  };

  const delete_mode = (id) => {
    alert("You want to delete id:" + id);
  };

  const add_mode = () => {
    
  };

  return (
    <div className="App">
      <div className="card_area">
        {!addFlag ? <button onClick={()=>setAddFlag(!addFlag)}>Add new dataset</button> : null}

        <input
          className="searchinput"
          type="search"
          name="search"
          id="search"
          placeholder="Filter by ...🔎"
          value={filter}
          onChange={filtering}
        />
        <button onClick={() => setFilter("")}>Reset</button>
        {/* <div className="card_box"> */}

        {Dishes &&
          Dishes.filter((dish) => dish.name.includes(filter))
            // .filter((dish) => dish.name.startsWith(filter.toUpperCase()))
            .map((dish) => {
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

        {/* </div> */}
      </div>

      <div class="details">
        {/* <h1>Page for card details ...</h1> */}
        
        <DetailAdd
          Dishes={Dishes}
          detailInfo={detailInfo}
          add_mode={add_mode}
          addFlag={addFlag}
          setAddFlag={setAddFlag}
        />        

        <DetailEdit
        detailInfo={detailInfo}
        edit_mode={edit_mode}
        delete_mode={delete_mode}
        // buttonText={buttonText}
        editFlag={editFlag}
        />
        
        
      </div>
    </div>
  );
}

export default App;
