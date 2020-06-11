import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";

const pushState = (obj, url) => window.history.pushState(obj, "", url);

class App extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = { test: 42 };
  // }

  state = {
    contests: this.props.initialContests,
  };

  componentDidMount() {}

  componentWillUnmount() {}

  fetchContest = (contestID) => {
    pushState({ currentContestID: contestID }, `/contest/${contestID}`);
    api.fetchContest(contestID).then((contest) => {
      this.setState({
        currentContestID: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        },
      });
    });
  };

  currentContest() {
    return this.state.contests[this.state.currentContestID];
  }

  pageHeader() {
    if (this.state.currentContestID) {
      return this.currentContest().contestName;
    }
    return "Naming Contests";
  }

  currentContent() {
    if (this.state.currentContestID) {
      return <Contest {...this.currentContest()} />;
    }
    return (
      <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
