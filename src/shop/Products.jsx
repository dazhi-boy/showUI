import React from 'react';
import {HttpGet} from '../httpUtil';
import axios from 'axios';

function Product(item) {
    console.log(item);
    return(
        <div>
            {item.description}
        </div>
    );
}

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        axios.get('/shop/product').then(
            (response) => {
              this.setState({
                items: response.data.data.records
              });
            }
        ) 
    }

    render() {
        const {items } = this.state;
        return (
            <div>
                {items.map(item => (
                    <div key={item.id}>{Product(item)}</div>
                ))}
            </div>
        );
    }
}
export default Products;