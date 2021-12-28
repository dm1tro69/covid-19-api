import React, {FC} from 'react';
import {Country} from "../types";
import styled from '@emotion/styled'

interface Props {
    countries: Country[]
    onItemClick: (country: Country) => void
}

const CountryList:FC<Props> = ({countries, onItemClick}) => {
    return (
        <ListWrapper>
            {countries.map((country) => (
                <ListItem key={country.ID} onClick={() => onItemClick(country)}>
                    <ListContent>
                        <h4>{country.Country}</h4>
                        <div>
                            New Confirmed: {country.NewConfirmed}
                        </div>
                        <div>
                            New Deaths: {country.NewDeaths}
                        </div>
                        <div>
                            New Recovered: {country.NewRecovered}
                        </div>
                    </ListContent>

                </ListItem>
            ))}

        </ListWrapper>
    );
};

export default CountryList;

const ListWrapper = styled.ul`
    padding: 0;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
    list-style-type: none;
  flex: 0 0 50%;
  text-align: center;
  
  @media (min-width: 420px) {
    flex: 0 0 33.3%;
  }
`
const ListContent = styled.div`
    background-color: #f7f7f7;
  margin: 5px;
  padding: 10px 0;
`
