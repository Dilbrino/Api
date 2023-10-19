import { NextResponse } from "next/server";
type teamInfo = {
    id: number;
    name: string;
    league: string;
    description: string;
};
export default function GET() {
    const footballTeams: teamInfo[] = [
        {
            id: 1,
            name: "Real Madrid",
            league: "La Liga",
            description: "Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish team .",
        },
        {
            id: 2,
            name: "Liverpool",
            league: "Premier League",
            description: "Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League.",
        },
        
        // export const comments = [
//   {
//     id: 1,
//     text: 'This is the first comment'
//   },
//   {
//     id: 2,
//     text: 'This is the second comment'
//   },
//   {
//     id: 3,
//     text: 'This is the third comment'
//   }
// ]

    ];

    return NextResponse.json(

        { data: footballTeams 
        
        },

        { status: 200 } 
    );
}