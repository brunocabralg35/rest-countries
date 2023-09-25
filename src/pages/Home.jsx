import { MagnifyingGlass } from "@phosphor-icons/react";
import { useCallback, useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function Home() {
  const { data } = useContext(DataContext);

  const [countriesList, setCountriesList] = useState(data);

  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");
  const [regionSearch, setRegionSearch] = useState("All");
  const [arrSearch, setArrSearch] = useState([]);

  const navigate = useNavigate();

  const getRegions = () => {
    const regions = [];
    for (let i of data) {
      if (!regions.includes(i.region)) {
        regions.push(i.region);
      }
    }
    return regions;
  };

  const getSearch = useCallback(
    (e) => {
      const arr = [];
      countriesList.filter((d) => {
        const countryName = d.name.toLowerCase();

        if (countryName.startsWith(e)) {
          arr.push(d);
        }
      });

      setArrSearch(arr);
    },
    [countriesList]
  );

  useEffect(() => {
    getSearch(search);
  }, [search, getSearch]);

  useEffect(() => {
    const newList = data.filter((d) => {
      if (regionSearch === "All") {
        return data;
      } else {
        return d.region === regionSearch;
      }
    });
    setCountriesList(newList);
  }, [regionSearch, data]);

  const navigateToCountry = (country) => {
    const isEqual = (element) => element === country;
    navigate(`/${data.findIndex(isEqual)}`);
  };

  return (
    <div
      className={theme === "dark" ? "text-whitey Home" : "Home text-darkerBlue"}
    >
      <div className="filtros flex justify-between md:px-16 px-6 flex-col gap-10 md:flex-row">
        <div className="inputWrapper flex shadow-md rounded-md items-center relative">
          <MagnifyingGlass
            size={25}
            className="absolute left-5 text-darkGray"
          />
          <input
            className={`${
              theme === "dark" ? "bg-darkBlue" : "bg-whitey"
            } py-4 md:w-96 pl-16 rounded-md w-full`}
            type="text"
            placeholder="Search for a country"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <select
          onChange={(e) => setRegionSearch(e.target.value)}
          className={`${
            theme === "dark" ? "bg-darkBlue" : ""
          } py-4 pl-4 rounded-md shadow-md w-1/2 md:w-64`}
          name=""
          id=""
        >
          <option value="All">Filter by Region</option>
          {getRegions().map((d, i) => {
            return (
              <option key={i} value={d}>
                {d}
              </option>
            );
          })}
        </select>
      </div>
      <div className="listagem justify-center flex gap-10 flex-wrap mt-10 px-5">
        {search === "" ? (
          countriesList.map((d, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  navigateToCountry(d);
                }}
                className={`${
                  theme === "dark" ? "bg-darkBlue" : "bg-whitey"
                } card cursor-pointer pb-8 rounded-md shadow-md flex flex-col md:w-64 transition-all hover:scale-105 hover:shadow-xl w-80`}
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
                      <p className="font-thin">
                        {d.population.toLocaleString("PT-BR")}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <p>Region: </p>
                      <p className="font-thin">{d.region}</p>
                    </div>
                    <div className="flex gap-2">
                      <p>Capital: </p>
                      <p className="font-thin">
                        {!d.capital ? "No Capital" : d.capital}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : arrSearch.length > 0 ? (
          arrSearch.map((d, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  navigateToCountry(d);
                }}
                className={`${
                  theme === "dark" ? "bg-darkBlue" : "bg-whitey"
                } card cursor-pointer pb-8 rounded-md shadow-md flex flex-col md:w-64 transition-all hover:scale-105 hover:shadow-xl w-80`}
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
                      <p className="font-thin">
                        {d.population.toLocaleString("PT-BR")}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <p>Region: </p>
                      <p className="font-thin">{d.region}</p>
                    </div>
                    <div className="flex gap-2">
                      <p>Capital: </p>
                      <p className="font-thin">
                        {!d.capital ? "No Capital" : d.capital}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No countries found!</p>
        )}
      </div>
    </div>
  );
}

export default Home;
