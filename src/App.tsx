import React, {FC, useEffect, useState} from 'react';
import GlobalInfo from "./components/GlobalInfo";

type Country = {
    Country: string
    CountryCode: string
    Date: string
    ID: string
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: number
    Premium: unknown
    Slug: string
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}
type GlobalData = {
    Date: string
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: number
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}

type ResponseData = {
    Countries:Country[]
    Date: string
    Global: GlobalData
    ID: string
    Message: string
}

const App:FC = () => {

    const [data, setData] = useState<ResponseData | undefined>(undefined)

    const fetchData = async () => {
      const result = await fetch('https://api.covid19api.com/summary')
        const data: ResponseData = await result.json()
        setData(data)
        console.log(data)

    }
    useEffect(() => {
        fetchData()

    }, [])

  return (
    <div>
        {data ?
            <GlobalInfo
                newConfirmed={data?.Global.NewConfirmed}
                newDeaths={data?.Global.NewDeaths}
                NewRecovered={data?.Global.NewRecovered}
            />: 'Loading...'
        }

    </div>
  );
}

export default App;
