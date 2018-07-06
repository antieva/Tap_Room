import React from 'react';
import Header from "./Header";
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';
import NewBeerForm from './NewBeerForm';
import Error404 from './Error404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: [],
      selectedBeer: null
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleChangeSelectedBeer = this.handleChangeSelectedBeer.bind(this);
  }

  handleAddingNewBeerToList(newBeer) {
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
  }

  handleChangeSelectedBeer(beer) {
    this.setState({selectedBeer: beer});
    alert('The selected drink is now: ' + this.state.selectedBeer.name);
  }

  render() {
    return (
      <div>
        <style jsx global>{`
            div {
              margin: 0 30px 30px;
            }
            body {
            font-family: Helvetica;
          }
          `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <BeerList beerList={this.state.masterBeerList}
          onBeerSelection={this.handleChangeSelectedBeer}/>} />
          <Route path='/newbeer' render={() => <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}


export default App;
