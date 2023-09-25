import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import ThemeContext from "../context/ThemeContext";

function Country() {
  const { i } = useParams();
  const { data } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const country = data[i];

  const getBorders = () => {
    if (!country.borders) return [];

    const borders = [];
    for (let i of country.borders) {
      borders.push(data.filter((d) => i === d.cioc)[0]);
    }

    const filteredBorders = borders.filter((b) => b !== undefined || null);

    return filteredBorders;
  };

  const navigateToCountry = (borderCountry) => {
    const isEqual = (element) => element === borderCountry;
    navigate(`/${data.findIndex(isEqual)}`);
  };

  return (
    <div
      className={`${
        theme === "dark" ? "text-whitey" : "text-darkerBlue"
      }  flex flex-col gap-9 md:px-16 px-6 lg:items-center pb-10 lg:pb-0`}
    >
      <div className="countryInfo flex flex-col lg:flex-row gap-16 lg:items-center mt-24 relative">
        <button
          onClick={() => navigate("/")}
          className={`${
            theme === "dark" ? "bg-darkBlue" : ""
          } hover:shadow-xl hover:scale-105 left-0 -top-20 absolute transition-all flex py-2 items-center gap-2 shadow-md w-32 justify-center rounded-md`}
        >
          <ArrowLeft size={25} /> Back
        </button>
        <div className="flag">
          <img
            src={country.flag}
            className="lg:w-128 w-full h-96 object-cover"
            alt=""
          />
        </div>
        <div className="content gap-6 flex flex-col lg:w-128">
          <h1 className="text-3xl font-bold">{country.name}</h1>
          <div className="columns flex lg:flex-row flex-col gap-10 lg:gap-0 lg:justify-between">
            <div className="column1 flex flex-col gap-2">
              <div className="flex gap-1">
                <p>Native Name:</p>{" "}
                <p className="font-light">{country.nativeName}</p>
              </div>
              <div className="flex gap-1">
                <p>Population:</p>{" "}
                <p className="font-light">
                  {country.population.toLocaleString("PT-BR")}
                </p>
              </div>
              <div className="flex gap-1">
                <p>Region:</p> <p className="font-light">{country.region}</p>
              </div>
              <div className="flex gap-1">
                <p>Sub Region:</p>{" "}
                <p className="font-light">{country.subregion}</p>
              </div>
              <div className="flex gap-1">
                <p>Capital:</p> <p className="font-light"> {!country.capital ? "No Capital" : country.capital}</p>
              </div>
            </div>
            <div className="column1 flex flex-col gap-2">
              <div className="flex gap-1">
                <p>Top Leval Domain:</p>{" "}
                <p className="font-light">{country.topLevelDomain}</p>
              </div>
              <div className="flex gap-1">
                <p>Currencies:</p>{" "}
                <ul className="font-light flex gap-2 flex-wrap">
                  {country.currencies ? (
                    country.currencies.map((cur, i) => (
                      <li
                        className="font-light after:content-[','] last-of-type:after:content-['']"
                        key={i}
                      >
                        {cur.name}
                      </li>
                    ))
                  ) : (
                    <p className="font-light">No currency</p>
                  )}
                </ul>
              </div>
              <div className="flex gap-1">
                <p>Languages:</p>{" "}
                <ul className="font-light flex gap-2 flex-wrap">
                  {country.languages.map((lan, i) => (
                    <li
                      className="font-light after:content-[','] last-of-type:after:content-['']"
                      key={i}
                    >
                      {lan.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="borderCountries mt-8 flex gap-5 items-center">
            <p>Border Countries:</p>
            <div className="list flex gap-3 flex-wrap lg:flex-nowrap">
              {getBorders().length == 0 && (
                <p className="font-light">No borders</p>
              )}
              {getBorders()
                .slice(0, 3)
                .map((d, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        navigateToCountry(d);
                      }}
                      className={`${
                        theme === "dark" ? "bg-darkBlue" : ""
                      } px-5 py-2 shadow-lg rounded-md font-light transition-all hover:scale-105 hover:shadow-xl`}
                    >
                      {d.name}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
