import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";

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
    this.setState({
      pageHeader: this.state.contests[contestID].contestName,
      currentContestID: contestID,
    });
  };

  currentContent() {
    if (this.state.currentContestID) {
      return <Contest {...this.state.contests[this.state.currentContestID]} />;
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
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
