import React, {FC} from 'react';

interface Props {
    newConfirmed: number
    newDeaths: number
    NewRecovered: number
}

const GlobalInfo:FC<Props> = ({newConfirmed, newDeaths, NewRecovered}) => {
    return (
        <div>
            <h1>Global Covid-19 data</h1>
            <h3>New Confirmed: {new Intl.NumberFormat().format(newConfirmed)}</h3>
            <h3>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</h3>
            <h3>New Recovered: {new Intl.NumberFormat().format(NewRecovered)}</h3>
        </div>
    );
};

export default GlobalInfo;
