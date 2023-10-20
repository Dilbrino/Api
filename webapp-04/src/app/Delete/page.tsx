"use client"
import { useEffect, useState } from "react";
import { TeamInfo } from "../teaminfo/types";
import Container from "../components/Container";

const InfoPage = () => {
  const [teams, setTeams] = useState<TeamInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/teaminfo", {
        method: "GET",
      });
      const result = await response.json();
      setTeams(result.data);
    };
    fetchData();
  }, []);

  const deleteTeam = async (id) => {
    if (!id) {
      console.error('ID is null.');
      return;
    }
  
    try {
      const response = await fetch(`/api/teaminfo/${team.id}`, {
        method: "DELETE",
      });
  
      if (response.status === 200) {
        const responseAfterDelete = await fetch("/api/teaminfo", {
          method: "GET",
        });
        const result = await responseAfterDelete.json();
        setTeams(result.data);
      } else {
        console.error('Failed to delete team. Status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred while deleting the team:', error);
    }
  };
  

  if (!teams.length) {
    return (
      <div className="mx-auto w-full max-w-3xl">
        <p>No response</p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-8 w-full max-w-4xl">
      <Container>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">League</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.id}>
                <td className="border px-4 py-2">{team.id}</td>
                <td className="border px-4 py-2">{team.name}</td>
                <td className="border px-4 py-2">{team.league}</td>
                <td className="border px-4 py-2">{team.description}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => deleteTeam(team.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default InfoPage;
