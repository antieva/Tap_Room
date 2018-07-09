import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerList(props) {
  // let optionalSelectedBeer = null;
  // if (props.selectedBeer != null) {
  //
  // }
  return (
    <div>
      {Object.keys(props.beerList).map(function(beerId) {
        var beer = props.beerList[beerId];
        return <Beer
          name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          remaining={beer.remaining}
          key={beerId}
          beerId ={beerId}
          onBeerSelection={props.onBeerSelection} />;
      })}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object,
  onBeerSelection: PropTypes.func.isRequired
  //onSellingPint: PropTypes.func.isRequired
};

export default BeerList;
