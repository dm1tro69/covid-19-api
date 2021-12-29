import React, {FC, useState} from 'react';
import {Country} from "../types";
import styled from "@emotion/styled";

interface Props {
    onItemClick: (country: Country) => void
    country: Country
}
interface ListContentProps {
    isActive: boolean
}

const CountryItem:FC<Props> = ({onItemClick, country}) => {

    const [isActive, setIsActive] = useState(false)

    const handleOnClick = (country: Country) => {
        onItemClick(country)
        setIsActive(!isActive)
    }

    return (
        <ListItem key={country.ID} onClick={() => handleOnClick(country)}>
            <ListContent isActive={isActive}>
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
    );
};

export default CountryItem;

const ListItem = styled.li`
    list-style-type: none;
  flex: 0 0 50%;
  text-align: center;
  
  @media (min-width: 420px) {
    flex: 0 0 33.3%;
  }
`
const ListContent = styled.div<ListContentProps>`
    background-color: ${props => props.isActive? '#fff':'#f7f7f7'} ;
  margin: 5px;
  padding: 10px 0;
`
