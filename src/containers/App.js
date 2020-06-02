import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { changeSearchField, requestRobots } from "../redux/actions";
import { connect } from "react-redux";
import Scroll from "../components/Scroll";
import "./App.css";

const mapStateToProps = (state) => ({
  searchField: state.searchField.searchField,
  robots: state.robotsReducer.robots,
  isPending: state.robotsReducer.isPending,
  error: state.robotsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (e) => dispatch(changeSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
