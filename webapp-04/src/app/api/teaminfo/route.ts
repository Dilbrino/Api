import { NextRequest, NextResponse } from "next/server";
type teamInfo = {
    id: number;
    name: string;
    league: string;
    description: string;
};
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



];

export function GET() {


    return NextResponse.json(

        {
            data: footballTeams,
            status: 200

        }
    );
}
export async function POST(request: NextRequest) {
    const body = JSON.parse(await request.text());
    const { name, league, description } = body;

    const newTeam: teamInfo = {
        id: footballTeams.length + 1,
        name,
        league,
        description,
    };

    footballTeams.push(newTeam);

    return NextResponse.json({
        data: newTeam,
        status: 200,
    });
}
// export async function DELETE(request: NextRequest) {
//     const { id } = await request.query; 
  
//     let index = -1;
//     for (let i = 0; i < footballTeams.length; i++) {
//       if (footballTeams[i].id === parseInt(id, 10)) {
//         index = i;
//         break;
//       }
//     }
  
//     if (index !== -1) {
//       footballTeams.splice(index, 1);
//     }
  
//     return NextResponse.json({
//       data: footballTeams,
//       status: 200,
//     });
//   }


