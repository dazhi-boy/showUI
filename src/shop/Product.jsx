import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import { Flex, WhiteSpace } from 'antd-mobile';
import './Product.less';

class Product extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const {item} = this.props.product;
        return (
            <div className="product">
                <img src={this.props.product.cover} alt={this.props.product.title}/>
                <span>名称：{this.props.product.title}</span>
                <span>描述：{this.props.product.description}</span>
            </div>
        );
    }
}
export default Product;