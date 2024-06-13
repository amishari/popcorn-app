import "./App.css";
// const data = [
//   {
//     Title: "Scar",
//     Year: "2007",
//     imdbID: "tt0847520",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BY2Y2MTc5OTUtYmQ2ZC00ZjFkLThlZTMtNjEzM2I5OTA3ZTFjXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg",
//   },
//   {
//     Title: "Fullmetal Alchemist: The Revenge of Scar",
//     Year: "2022",
//     imdbID: "tt18671386",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNDYwY2FkYWEtYzVmMC00OWM0LWFjM2EtNTZhMGZkOWJkOGY3XkEyXkFqcGdeQXVyMTI2MjMyMzAx._V1_SX300.jpg",
//   },
//   {
//     Title: "The Scar",
//     Year: "1976",
//     imdbID: "tt0074220",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZDQ5YThmZWMtOTg3OS00YTQ3LTk2NzktNmE3ZjAzMzhlY2FlXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_SX300.jpg",
//   },
//   {
//     Title: "Scar",
//     Year: "2007",
//     imdbID: "tt1726740",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTQwMjcyMDIyMF5BMl5BanBnXkFtZTcwMTQxMzMwNQ@@._V1_SX300.jpg",
//   },
//   {
//     Title: "Scar City",
//     Year: "1998",
//     imdbID: "tt0126016",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZGFmMGU1OTgtZDU2MC00MzJhLWE1ZjQtZDYwNTM3YWFmZGZjXkEyXkFqcGdeQXVyMTI1NTE2NjA@._V1_SX300.jpg",
//   },
//   {
//     Title: "The Inner Scar",
//     Year: "1972",
//     imdbID: "tt0068380",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BODhhNjM1ZWQtOGY4NS00ZGExLTllOTAtOWYzYzE4YzczNjA0XkEyXkFqcGdeQXVyMjE4NzY3Mw@@._V1_SX300.jpg",
//   },
//   {
//     Title: "Red Hot Chili Peppers: Scar Tissue",
//     Year: "1999",
//     imdbID: "tt6761480",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BY2M2ZTFmOGQtMjE5Ni00YTAxLTkzNDEtNmRhOGUyOTUwM2QwXkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_SX300.jpg",
//   },
//   {
//     Title: "The Scar of Shame",
//     Year: "1929",
//     imdbID: "tt0018362",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNjFlNDQ4ZTktM2E3MC00MWI3LTliNzktNzJiNDI1ZTljOTVlXkEyXkFqcGdeQXVyNDY3MTQwMzk@._V1_SX300.jpg",
//   },
//   {
//     Title: "Scar",
//     Year: "2005",
//     imdbID: "tt0453543",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BOTAxMjRjOWQtMzMxZS00NjZhLTgwN2YtZTcxOTE0OTcxNjQ2XkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_SX300.jpg",
//   },
//   {
//     Title: "Scar Tissue",
//     Year: "2013",
//     imdbID: "tt2095762",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjM1MDIyMjA1NF5BMl5BanBnXkFtZTcwMzczNDI5OQ@@._V1_SX300.jpg",
//   },
// ];
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
export default function App() {
  return (
    <div>
      <nav className="nav-bar">
        <span className="logo">🍿 usePopCorn</span>
        <input type="text" placeholder="Search movies ..." />
        <span className="result"> 3 movies found!</span>
      </nav>
      <main className="main">
        <div className="box">
          <button className="btn-toggle">+</button>
          <ul className="list">
            {data.map((item) => (
              <li key={item.imdbID}>
                <img src={item.Poster} className="img" />
                <h3 className="title">{item.Title}</h3>
                <div>
                  <p>
                    <span>🗓️</span>
                    <span>{item.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="box">
          <button className="btn-toggle">+</button>
          <ul className="list">
            {data.map((item) => (
              <li key={item.imdbID}>
                <img src={item.Poster} className="img" />
                <h3 className="title">{item.Title}</h3>
                <div>
                  <p>
                    <span>🗓️</span>
                    <span>{item.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
