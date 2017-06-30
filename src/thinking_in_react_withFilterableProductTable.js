import React from 'react';
import ReactDOM from 'react-dom';
import './dialog.css';


class SearchBar extends  React.Component{
    constructor(props){
        super(props);
        this.handerFilterTextChange=this.handerFilterTextChange.bind(this);
        //this.handerKeyDown=this.handerKeyDown.bind(this);
    }

    handerFilterTextChange(e){
     if(13==e.keyCode){
         console.log(e.target.value);
        this.props.onFilterTextChange(e.target.value);
     }
    }

    render(){
        return (
            <input type="text" placeholder="Search"  onKeyDown={this.handerFilterTextChange}/>
        );
    }
}


class CategorysRow extends  React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const categorysRow=[];
        categorysRow.push(<tr key={this.props.category}><td colSpan="2">{this.props.category}</td></tr>);

        for(let product of this.props.products){
            categorysRow.push(<tr key={product.name}><td>{product.name}</td><td>{product.price}</td> </tr>);

        }

        return (
            <tbody>
            {categorysRow}
            </tbody>

        );
    }
}

class ProductTable extends  React.Component{


    render(){
        const  categoryMap=new Map();
        for(let product of  this.props.products){
          //
            if(!this.props.filterText||product.name.includes(this.props.filterText)){
                if(categoryMap.has(product.category)){
                    categoryMap.get(product.category).push(product);
                }else{
                  categoryMap.set(product.category,[product]);
                }

            }
        }
        // const categorysRows=  categoryMap.Map((key, products)=>
        //     <tr key={key}> <CategorysRow  category={key}  products={products} /> </tr>
        // );

        const categorysRows=[];
        for (let [key, products] of categoryMap.entries()) {
            console.log(key);
            categorysRows.push(
                <tr key={key}> <CategorysRow  category={key}  products={products} /> </tr>
            )
        }


        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{categorysRows}</tbody>
            </table>
        );
    }
}


class FilterableProductTable extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            filterText:"",
        }

        this.handleFilterTextInput=this.handleFilterTextInput.bind(this);
    }

    handleFilterTextInput(filterTextInput){
        this.setState({filterText:filterTextInput});

    }

    render(){
        return (
            <div className="FancyBorder FancyBorder-blue width300">
                <div>FilterableProductTable</div>
                <SearchBar onFilterTextChange={this.handleFilterTextInput} handerKeyDown={this}/>
                <ProductTable products={this.props.products} filterText={this.state.filterText} />
            </div>
        )
    }
}

const products =[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


ReactDOM.render(
    <FilterableProductTable products={products} />,
    document.getElementById('root')
);
