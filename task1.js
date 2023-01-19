const Teams = [
  {
    team: "IND",
    M: 5,
    W: 4,
    L: 1,
    NRR: 1.319,
    Pts: 8,
  },
  {
    team: "BAN",
    M: 5,
    W: 2,
    L: 3,
    NRR: -1.176,
    Pts: 4,
  },
  {
    team: "PAK",
    M: 5,
    W: 3,
    L: 2,
    NRR: 1.028,
    Pts: 6,
  },
  {
    team: "SA",
    M: 5,
    W: 2,
    L: 2,
    NRR: 0.874,
    Pts: 5,
  },
  {
    team: "NED",
    M: 5,
    W: 2,
    L: 3,
    NRR: -0.849,
    Pts: 4,
  },
  {
    team: "ZIM",
    M: 5,
    W: 1,
    L: 3,
    NRR: -1.138,
    Pts: 3,
  },
];

const comparator = (a, b) => {
  if (a.Pts - b.Pts != 0) return b.Pts - a.Pts;
  if (a.NRR > b.NRR) {
    return -1;
  }
  return 1;
};
const SortTeams = (Teams) => {
  Teams.sort(comparator);
};

SortTeams(Teams);

console.log(Teams);
