import React, {FC, useEffect, useState} from 'react';
import GlobalInfo from "./components/GlobalInfo";
import {Country, ResponseData} from "./types";
import CountryList from "./components/CountryList";
import {Global, css} from "@emotion/react";


const App:FC = () => {

    const [data, setData] = useState<ResponseData | undefined>(undefined)
    const [activeCountries, setActiveCountry] = useState<Country[]>([])

    const fetchData = async () => {
      const result = await fetch('https://api.covid19api.com/summary')
        const data: ResponseData = await result.json()
        setData(data)
        console.log(data)

    }
    useEffect(() => {
        fetchData()

    }, [])

    const onItemClick = (country: Country) => {
      const countryIndex = activeCountries.findIndex(activeCountry => activeCountry.ID === country.ID)
        if (countryIndex > -1){
            const newActiveCountries = [...activeCountries]
            newActiveCountries.slice(countryIndex, 1)
            setActiveCountry(newActiveCountries)
        }else {
            setActiveCountry([...activeCountries, country])
        }

    }

  return (
    <div>
        <Global styles={css`
            body {
            background-color: #f1f1f1;
            color: #7d7d7d;
            }
        `}/>

        {activeCountries.map((aCountry) => (
               <span>{aCountry.Country}</span>
        ))}

        {data ?
            <>
            <GlobalInfo
                newConfirmed={data?.Global.NewConfirmed}
                newDeaths={data?.Global.NewDeaths}
                NewRecovered={data?.Global.NewRecovered}
            />
            <CountryList countries={data.Countries} onItemClick={onItemClick}/>
            </>
            : 'Loading...'
        }

    </div>
  );
}

export default App;
