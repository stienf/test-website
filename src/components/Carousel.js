import React, {Component} from 'react';

import cocktail from '../assets/images/cocktail.png';
import recipe from '../assets/images/recipe.jpeg';
import test from '../assets/images/test.png';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Cocktail Shaker',
                    subtitle: 'API project',
                    imgSrc: cocktail,
                    link: 'https://stienf.github.io/Cocktail-Shaker/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'My Favourite Recipes',
                    subtitle: 'Javascript project',
                    imgSrc: recipe,
                    link: '',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Blog Application',
                    subtitle: 'Express blog app',
                    imgSrc: test,
                    link: '',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
