import React, { useEffect, useState } from "react";
import "../styles/App/App.css";
import "@fontsource/montserrat";
import { Images } from "../utilities/Utilities";
import { Header } from "./Header";
import Main from "./Main";
import Swiper from "./SwiperElement";
import useFetch from "../api/useFetch";
import UseResize from "../hooks/UseResize";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const { showMain } = UseResize(1100);

  const { data, loading, error, refetch } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=431e7a61c4a3556cbf4ffbf1a97345f3&units=metric`
  );
  console.log(data);
  console.log(searchQuery);

  function handleChangeQuery(item: string) {
    setSearchQuery(item);
    refetch();
  }

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);

  console.log(showMain);
  return (
    <>
      <div className="App">
        <Header onChageQuery={handleChangeQuery} />
        {showMain ? <Main /> : <Swiper />}
      </div>
    </>
  );
}

export default App;

/*<div style={{width:"400px", height:"400px",background: "red", color: "white"}}>
{data?.name}
</div>
*/
