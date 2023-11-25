import "./DataTable.scss";


const rows = [
  {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    hp: 45,
    attack: 49,
    defense: 49,
    special_attack: 65,
    special_defense: 65,
    speed: 45,
  },
  {
    id: 2,
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    hp: 60,
    attack: 62,
    defense: 63,
    special_attack: 80,
    special_defense: 80,
    speed: 60,
  },
  {
    id: 3,
    name: "Venusaur",
    type: ["Grass", "Poison"],
    hp: 80,
    attack: 82,
    defense: 83,
    special_attack: 100,
    special_defense: 100,
    speed: 80,
  },
  {
    id: 4,
    name: "Charmander",
    type: ["Fire"],
    hp: 39,
    attack: 52,
    defense: 43,
    special_attack: 60,
    special_defense: 50,
    speed: 65,
  },
  {
    id: 5,
    name: "Charmeleon",
    type: ["Fire"],
    hp: 58,
    attack: 64,
    defense: 58,
    special_attack: 80,
    special_defense: 65,
    speed: 80,
  },
  {
    id: 6,
    name: "Charizard",
    type: ["Fire", "Flying"],
    hp: 78,
    attack: 84,
    defense: 78,
    special_attack: 109,
    special_defense: 85,
    speed: 100,
  },
  {
    id: 7,
    name: "Squirtle",
    type: ["Water"],
    hp: 44,
    attack: 48,
    defense: 65,
    special_attack: 50,
    special_defense: 64,
    speed: 43,
  },
  {
    id: 8,
    name: "Wartortle",
    type: ["Water"],
    hp: 59,
    attack: 63,
    defense: 80,
    special_attack: 65,
    special_defense: 80,
    speed: 58,
  },
  {
    id: 9,
    name: "Blastoise",
    type: ["Water"],
    hp: 79,
    attack: 83,
    defense: 100,
    special_attack: 85,
    special_defense: 105,
    speed: 78,
  },
  {
    id: 10,
    name: "Caterpie",
    type: ["Bug"],
    hp: 45,
    attack: 30,
    defense: 35,
    special_attack: 20,
    special_defense: 20,
    speed: 45,
  },
  {
    id: 11,
    name: "Metapod",
    type: ["Bug"],
    hp: 50,
    attack: 20,
    defense: 55,
    special_attack: 25,
    special_defense: 25,
    speed: 30,
  },
  {
    id: 12,
    name: "Butterfree",
    type: ["Bug", "Flying"],
    hp: 60,
    attack: 45,
    defense: 50,
    special_attack: 90,
    special_defense: 80,
    speed: 70,
  },
  {
    id: 13,
    name: "Weedle",
    type: ["Bug", "Poison"],
    hp: 40,
    attack: 35,
    defense: 30,
    special_attack: 20,
    special_defense: 20,
    speed: 50,
  },
  {
    id: 14,
    name: "Kakuna",
    type: ["Bug", "Poison"],
    hp: 45,
    attack: 25,
    defense: 50,
    special_attack: 25,
    special_defense: 25,
    speed: 35,
  },
  {
    id: 15,
    name: "Beedrill",
    type: ["Bug", "Poison"],
    hp: 65,
    attack: 90,
    defense: 40,
    special_attack: 45,
    special_defense: 80,
    speed: 75,
  },
];

const tableHead = [
  "ID",
  "name",
  "type",
  "health",
  "attack",
  "defense",
  "special_attack",
  "special_defense",
  "speed",
];
export default function DataTable() {
  return (
      <div className='Table__Container'>
        <table aria-label='simple table' className='Table'>
          <thead className='Table__Head'>
            <tr className='Table__Head--Row'>
              {tableHead.map((cellHead, index) => {
                return <th key={index} className='Table__Head--Cell'>{cellHead}</th>;
              })}
            </tr>
          </thead>
          <tbody className='Table__Body'>
            {rows.map((row) => (
              <tr
                key={row.name}
                className='Table__Body--Row'
              >
                {Object.entries(row).map(([key, value], index) => {
                  return (
                    <td data-cell={key} key={index} className='Table__Body--Cell'>
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}