import React from 'react';

export type TeamInfo = {
    id: number;
    name: string;
    league: string;
    description: string;
};
const Homelayout = (props: TeamInfo) => {
    
    const { name, league, description } = props;
    
        return (
            <div className="ItemContainer">
                <h1>{name}</h1>
                <p>Type: {league}</p>
                <p>{description}</p>
            </div>
        );
    };
    
export default Homelayout;