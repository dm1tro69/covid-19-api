import React, {FC} from 'react';
import {Country} from "../types";
import styled from '@emotion/styled'
import CountryItem from "./CountryItem";

interface Props {
    countries: Country[]
    onItemClick: (country: Country) => void
}

const CountryList:FC<Props> = ({countries, onItemClick}) => {
    return (
        <ListWrapper>
            {countries.map((country) => (
                <CountryItem onItemClick={onItemClick} country={country}/>
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

