import { MagnifyingGlass } from "@phosphor-icons/react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function Home() {
  const { data } = useContext(DataContext);

  return (
    <div className="Home text-darkerBlue">
      <div className="filtros flex justify-between px-16">
        <div className="inputWrapper flex shadow-md rounded-md items-center relative">
          <MagnifyingGlass
            size={25}
            className="absolute left-5 text-darkGray"
          />
          <input
            className="py-4 w-96 pl-16 rounded-md"
            type="text"
            placeholder="Search for a country"
          />
        </div>
        <select className="py-4 pl-4 pr-20 rounded-md shadow-md" name="" id="">
          <option value="0">Filter by Region</option>
        </select>
      </div>
      <div className="listagem justify-center flex gap-10 flex-wrap mt-10 px-5">
        {data.map((d, i) => {
          return (
            <div
              key={i}
              className="card cursor-pointer pb-8 rounded-md shadow-md bg-whitey flex flex-col w-64 transition-all hover:scale-105 hover:shadow-xl"
            >
              <img
                src={d.flag}
                alt=""
                className="w-full h-40 rounded-t-md object-cover"
              />
              <div className="content flex flex-col gap-3 pl-6 mt-5">
                <h1 className="text-2xl font-bold">{d.name}</h1>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <p>Population: </p>
                    <p className="font-thin">{d.population}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>Region: </p>
                    <p className="font-thin">{d.region}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>Capital: </p>
                    <p className="font-thin">{d.capital}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
