import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

class ShowState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      i: 0,
      all: {},
      home: {},
      away: {}
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v2/leagueTable/64",
      headers: {
        "x-rapidapi-key": "9a81319a2amsh29a74c193247378p1faba6jsn8a57fcd267fc",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
      }
    };

    axios
      .request(options)
      .then((response) => {
        // console.log(response.data.api.standings);
        this.next = () => {
          if (this.state.i >= 0 && this.state.i < 19) {
            this.setState((prevState) => {
              return {
                i: prevState.i + 1,
                data: response.data.api.standings[0][this.state.i + 1],
                all: response.data.api.standings[0][this.state.i + 1].all,
                home: response.data.api.standings[0][this.state.i + 1].home,
                away: response.data.api.standings[0][this.state.i + 1].away
              };
            });
          }
        };

        this.back = () => {
          if (0 < this.state.i) {
            this.setState((prevState) => {
              return {
                i: prevState.i - 1,
                data: response.data.api.standings[0][this.state.i - 1],
                all: response.data.api.standings[0][this.state.i - 1].all,
                home: response.data.api.standings[0][this.state.i - 1].home,
                away: response.data.api.standings[0][this.state.i - 1].away
              };
            });
          }
        };
        this.setState(
          {
            data: response.data.api.standings[0][this.state.i],
            all: response.data.api.standings[0][this.state.i].all,
            home: response.data.api.standings[0][this.state.i].home,
            away: response.data.api.standings[0][this.state.i].away
          },
          () => {
            console.log(this.state.data);
            // console.log(this.state.all);
            // console.log(this.state.home);
            // console.log(this.state.away);
          }
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <div >
          <div className = "header_team_name">
            <h1>{this.state.data.teamName}</h1>
            <h3>Position in the table: {this.state.data.rank}</h3>
            <h3>Points: {this.state.data.points}</h3>
          </div>
          <Paper className="form" elevation={20} style = {{background:"#d8d8d8"}}>
          <img
              className="teamImg"
              src={this.state.data.logo}
              alt={this.state.data.teamName}
            />
            <table>
              <tbody>
                <tr>
                  <th>
                    <img style = {{width: "20px"}}
                    src={this.state.data.logo}
                    alt={this.state.data.teamName}
                  />
                  <img style = {{width: "22px"}}
                    src={this.state.data.logo}
                    alt={this.state.data.teamName}
                  />
                    <img style = {{width: "24px"}}
                  src={this.state.data.logo}
                  alt={this.state.data.teamName}
                  />
                    <img style = {{width: "26px"}}
                        src={this.state.data.logo}
                        alt={this.state.data.teamName}
                        />
                    <img style = {{width: "28px"}}
                    src={this.state.data.logo}
                    alt={this.state.data.teamName}
                  />
                    <img style = {{width: "30px"}}
                    src={this.state.data.logo}
                    alt={this.state.data.teamName}
                  />
                    <img style = {{width: "28px"}}
                    src={this.state.data.logo}
                    alt={this.state.data.teamName}
                  />
                                      <img style = {{width: "26px"}}
                    src={this.state.data.logo}
                    alt={this.state.data.teamName}
                  />
                                      <img style = {{width: "24px"}}
                    src={this.state.data.logo}
                    alt={this.state.data.teamName}
                  />
         
                                      <img style = {{width: "22px"}}
                    src={this.state.data.logo}
                    alt={this.state.data.teamName}
                  />
                                      <img style = {{width: "20px"}}
                    src={this.state.data.logo}
                    alt={this.state.data.teamName}
                  />
                  </th>
                  <th>All</th>
                  <th>Home</th>
                  <th>Away</th>
                </tr>
                <tr>
                  <td>Games</td>
                  <td>{this.state.all.matchsPlayed}</td>
                  <td>{this.state.home.matchsPlayed}</td>
                  <td>{this.state.away.matchsPlayed}</td>
                </tr>
                <tr>
                  <td>Wins</td>
                  <td>{this.state.all.win}</td>
                  <td>{this.state.home.win}</td>
                  <td>{this.state.away.win}</td>
                </tr>
                <tr>
                  <td>Draws</td>
                  <td>{this.state.all.draw}</td>
                  <td>{this.state.home.draw}</td>
                  <td>{this.state.away.draw}</td>
                </tr>
                <tr>
                  <td>Loses</td>
                  <td>{this.state.all.lose}</td>
                  <td>{this.state.home.lose}</td>
                  <td>{this.state.away.lose}</td>
                </tr>
                <tr>
                  <td> Goals scored</td>
                  <td>{this.state.all.goalsFor}</td>
                  <td>{this.state.home.goalsFor}</td>
                  <td>{this.state.away.goalsFor}</td>
                </tr>
                <tr>
                  <td>Goals against</td>
                  <td>{this.state.all.goalsAgainst}</td>
                  <td>{this.state.home.goalsAgainst}</td>
                  <td>{this.state.away.goalsAgainst}</td>
                </tr>
              </tbody>
            </table>
            <img
              className="teamImg"
              src={this.state.data.logo}
              alt={this.state.data.teamName}
            />
          </Paper>
          <div>
              <h6>The data refer to the date {this.state.data.lastUpdate}</h6>
          </div>
        </div>
  
        <div className = "btns">
          <Button
            onClick={this.back}
            variant="outlined"
            color="secondary"
          >
            BACK
          </Button>
          <Button
            onClick={this.next}
            variant="outlined"
            color="primary"
          >
            NEXT
          </Button>
        </div>
      </div>
    );
  }
}

export default ShowState;
