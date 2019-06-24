import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import './index.styl';

const query = gql`
query allProducts{
  products: allProducts{
    id
    name
    description
    price
    category
  }
}
`;

class GQLComponent extends Component {

    render () {

        console.log('In KV RC MODULE 1 render');
        const { data } = this.props;
        if(data.loading){
            return <div className="container">Loading...</div>;
        }
        if(data.products){
            return data.products.map(product => <div className="container"><div className="text-red">{product.name}</div></div>);
        }

    }

}

export default graphql(query)(GQLComponent);