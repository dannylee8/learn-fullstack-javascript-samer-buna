import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";

const pushState = (obj, url) => window.history.pushState(obj, "", url);

class App extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = { test: 42 };
  // }

  state = {
    pageHeader: "Naming Contests",
    contests: this.props.initialContests,
  };

  componentDidMount() {}

  componentWillUnmount() {}

  fetchContest = (contestID) => {
    pushState({ currentContestID: contestID }, `/contest/${contestID}`);
  };

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
