import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import './index.styl';

const query = gql`
query getPromotion{
  promotion: getPromotion{
    id
    title
    product
    duration
    discount
  }
}
`;

class ButtonComponent extends Component {

    render () {

        console.log('In KV RC BUTTON MODULE render');
        const { data } = this.props;
        if(data.loading){
            return <div className="container">Loading...</div>;
        }
        if(data.products){
            return data.promotion.map(product => <div className="container">
              <div className="text-blue">{promotion.title}</div>
              <div className="btn"><button type="button" className="btn-default">Press</button></div>
            </div>);
        }

    }

}

export default graphql(query)(ButtonComponent);