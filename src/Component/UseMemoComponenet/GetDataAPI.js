import { React, useEffect, useState, useMemo } from "react";
import Axios from "axios";

import { Wrapper, ButtonEl } from "../../StyledComponent/GetDataAPI.style";
function GetDataAPI() {
  let [data, setData] = useState("");
  let [toggle, setToggle] = useState(false);
  useEffect(() => {
    Axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8").then(
      (res) => {
        setData(res.data);
      }
    );
  }, []);

  function ToggleChange() {
    setToggle(!toggle);
  }

  function findTheLogestName(Data) {
    if (!Data) {
      return null;
    }
    let LongMovieName = "";
    for (let i = 0; i < Data.length; i++) {
      let CurrentName = Data[i].name.length;
      if (CurrentName >= 4) {
        LongMovieName += Data[i].name + " ";
      }
    }
    console.log("hi Mubarak");
    return LongMovieName;
  }

  let getLongestName = useMemo(() => findTheLogestName(data), [data]);
  return (
    <>
      <Wrapper>
        <h1>UseMemo Example</h1>
        <div>{getLongestName}</div>
        <ButtonEl onClick={ToggleChange}>toggle</ButtonEl>
        {!toggle ? "" : <p>Toggle</p>}
      </Wrapper>
    </>
  );
}

export default GetDataAPI;
