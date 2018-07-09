import React from 'react';
import Header from "./Header";
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';
import NewBeerForm from './NewBeerForm';
import Error404 from './Error404';
import { v4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: {},
      selectedBeer: null
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleChangeSelectedBeer = this.handleChangeSelectedBeer.bind(this);
    //this.handleChangBeerRemainings = this.handleChangBeerRemainings.bind(this);
  }

  handleAddingNewBeerToList(newBeer) {
    console.log(newBeer);
    var newBeerId = v4();
    var newMasterBeerList = Object.assign({}, this.state.masterBeerList, {
      [newBeerId]: newBeer
    });
    this.setState({masterBeerList: newMasterBeerList});
  }

  handleChangeSelectedBeer(clickedBeerId) {
    var newMasterBeerList = Object.assign({}, this.state.masterBeerList);
    console.log('I am inside handleChangeSelectedBeer');
    console.log(clickedBeerId);
    Object.keys(newMasterBeerList).forEach(beerId => {
      if (beerId == clickedBeerId) {
        newMasterBeerList[beerId].remaining = (parseInt(newMasterBeerList[beerId].remaining ) - 1).toString();
      }
    });
    this.setState({masterBeerList: newMasterBeerList,
    selectedBeer: null});
  }

  // handleChangBeerRemainings(beer) {
  //   this.setState({selectedBeer: beer});
  //   var newMasterBeerList = this.state.masterBeerList.slice();
  //   newMasterBeerList.map((beer) => {
  //     if(beer.id == selectedBeer.id) {
  //       console.log(beer.name);
  //       console.log(beer.id);
  //       console.log(selectedBeer.name);
  //       console.log(selectedBeer.id);
  //       console.log(beer.remainig);
  //       beer.remaining = selectedBeer.remaining;
  //       console.log('result ' + beer.remaining);
  //     }
  //   });
  //   this.setState({masterBeerList: newMasterBeerList});
  // }

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
          onBeerSelection={this.handleChangeSelectedBeer}
          />} />
          <Route path='/newbeer' render={() => <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}


export default App;
