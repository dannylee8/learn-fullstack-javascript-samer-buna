import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";

const pushState = (obj, url) => window.history.pushState(obj, "", url);

class App extends React.Component {
  state = this.props.initialData;

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

  fetchContestList = () => {
    pushState({ currentContestID: null }, `/`);
    api.fetchContestList().then((contests) => {
      this.setState({
        currentContestID: null,
        contests,
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
      return (
        <Contest
          contestListClick={this.fetchContestList}
          {...this.currentContest()}
        />
      );
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
