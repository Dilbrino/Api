"use client"
import { useEffect, useState } from "react";
import { TeamInfo } from "../teaminfo/types";
import Container from "../components/Container";

const InfoPage = () => {
  const [responses, setResponses] = useState<TeamInfo[]>([]);

  useEffect(() => {
    const getResponses = async () => {
      const response = await fetch("/api/teaminfo", {
        method: "get",
      });

      const result = (await response.json()) as { data: TeamInfo[] };
      setResponses(result.data);
    };

    getResponses();
  }, []);

  if (!responses.length) {
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
            </tr>
          </thead>
          <tbody>
            {responses.map((team) => (
              <tr key={team.id}>
                <td className="border px-4 py-2">{team.id}</td>
                <td className="border px-4 py-2">{team.name}</td>
                <td className="border px-4 py-2">{team.league}</td>
                <td className="border px-4 py-2">{team.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default InfoPage;
