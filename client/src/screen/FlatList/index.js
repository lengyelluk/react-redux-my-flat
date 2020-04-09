import { Form, Input, Button, Header, Container, Grid } from 'semantic-ui-react'
import React, { PureComponent } from 'react'
import { CardList, PriceInput } from '../../components'
import { cardService } from '../../_services/card.service';
import './style.css'

import { connect } from 'react-redux';
import { getCards } from '../../_actions/card.actions';

class FlatListScreen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            filteredCards: [],
            filter: {
                district: '',
                gender: '',
                maxFlatmates: '',
                maxPrice: '',
                petAllowed: false,
                smokingAllowed: false
            }
        }

        this.resetFilters = this.resetFilters.bind(this)
        this.updateCards = this.updateCards.bind(this)
        this.updateDistrict = this.updateDistrict.bind(this)
        this.updateGender = this.updateGender.bind(this)
        this.updateMaxFlatmates = this.updateMaxFlatmates.bind(this)
        this.updateMaxPrice = this.updateMaxPrice.bind(this)
        this.updatePetAllowed = this.updatePetAllowed.bind(this)
        this.updateSmokingAllowed = this.updateSmokingAllowed.bind(this)
    }

    async componentDidMount() {
        const data = await cardService.getAll();
        this.setState({
            cards: data,
            filteredCards: data,
        })
    }

    updateCards() {
        this.setState({
            filteredCards: [
                ...this.state.cards
                .filter(x => (
                    !this.state.filter.district || 
                    x.district === this.state.filter.district
                ))
                .filter(x => (
                    !this.state.filter.gender || 
                    (x.prefFlatmatesMale && this.state.filter.gender === "male") ||
                    (x.prefFlatmatesFemale && this.state.filter.gender === "female") ||
                    (x.prefFlatmatesCouple && this.state.filter.gender === "couple")
                ))
                .filter(x => (
                    !this.state.filter.maxFlatmates || 
                    x.flatmatesMale + x.flatmatesFemale <= this.state.filter.maxFlatmates
                ))
                .filter(x => (
                    !this.state.filter.maxPrice || 
                    x.price.value <= this.state.filter.maxPrice
                ))
                .filter(x => (
                    !this.state.filter.petAllowed || 
                    x.petAllowed === this.state.filter.petAllowed
                ))
                .filter(x => (
                    !this.state.filter.smokingAllowed || 
                    x.smokingAllowed === this.state.filter.smokingAllowed
                ))
            ]
        })
    }

    updateDistrict(e) {
        this.setState({
            filter: {
                ...this.state.filter,
                district: e.currentTarget.value
            }
        }, this.updateCards)
    }
    updateGender(e) {
        this.setState({
            filter: {
                ...this.state.filter,
                gender: e.currentTarget.value
            }
        }, this.updateCards)
    }

    updateMaxFlatmates(e) {
        this.setState({
            filter: {
                ...this.state.filter,
                maxFlatmates: parseInt(e.currentTarget.value) || 0
            }
        }, this.updateCards)
    }

    updateMaxPrice(e) {
        this.setState({
            filter: {
                ...this.state.filter,
                maxPrice: parseInt(e.currentTarget.value) || 0
            }
        }, this.updateCards)
    }

    updatePetAllowed() {
        this.setState({
            filter: {
                ...this.state.filter,
                petAllowed: !this.state.filter.petAllowed
            }
        }, this.updateCards)
    }

    updateSmokingAllowed() {
        this.setState({
            filter: {
                ...this.state.filter,
                smokingAllowed: !this.state.filter.smokingAllowed
            }
        }, this.updateCards)
    }

    resetFilters = () => {
        this.setState({ 
            filteredCards: this.state.cards,
            filter: {
                district: '',
                gender: '',
                maxFlatmates: '',
                maxPrice: '',
                petAllowed: false,
                smokingAllowed: false
            }
        });
    }
        


    render() {
        return (
            <>
                <Container id='flat-list-header'>
                    <Header as='h1'>Find a Room that you like!</Header>
                    <p>Do you want to know more details about the room and the flat?</p>
                    <p>Just click on the photo and more details will be displayed. Don't forget that you need to register/login
                        in order to see the details
                    </p>
                    <p>Special hint: Use the filter to to narrow the search result</p>
                </Container>
                    <Form onSubmit={this.resetFilters}>
                        <Form.Group inline>
                            <Form.Field label='City District'
                                control='select'
                                onChange={this.updateDistrict}
                                value={this.state.filter.district}
                            >
                                <option value=''></option>
                                <option value='Stare Mesto'>Staré Mesto</option>
                                <option value='Ruzinov'>Ružinov</option>
                                <option value='Vrakuna'>Vrakuňa</option>
                                <option value='Podunajske Biskupice'>Podunajské Biskupice</option>
                                <option value='Nove Mesto'>Nové Mesto</option>
                                <option value='Raca'>Rača</option>
                                <option value='Vajnory'>Vajnory</option>
                                <option value='Karlova Ves'>Karlova Ves</option>
                                <option value='Dubravka'>Dúbravka</option>
                                <option value='Lamac'>Lamač</option>
                                <option value='Devinska Nova Ves'>Devínska Nová Ves</option>
                            </Form.Field>
                            <Form.Field
                                >
                                <label>Flatmates</label>
                                <Input onChange={this.updateMaxFlatmates} placeholder='3'
                                        value={this.state.filter.maxFlatmates}
                                        id='form-flatmates'
                                        />
                            </Form.Field>
                            <Form.Field 
                                id='form-gender'
                                label='Your gender'
                                control='select'
                                onChange={this.updateGender}
                                value={this.state.filter.gender}
                                >
                                <option value=''></option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='couple'>Couple</option>
                            </Form.Field>
                        </Form.Group>
                        <Form.Group inline>
                            <Form.Field>
                                <label>Price up to</label>
                                <Input onChange={this.updateMaxPrice} placeholder='350 EUR'
                                        value={this.state.filter.maxPrice}
                                        id='form-max-price'/>
                            </Form.Field>
                            <Form.Field
                                label='Pet Allowed'
                                control='input'
                                type='checkbox'
                                checked={this.state.filter.petAllowed}
                                onChange={this.updatePetAllowed}
                                value={this.state.filter.petAllowed}
                            />
                            <Form.Field
                                label='Smoking Allowed'
                                control='input'
                                type='checkbox'
                                checked={this.state.filter.smokingAllowed}
                                onChange={this.updateSmokingAllowed}
                                value={this.state.filter.smokingAllowed}
                            />
                            <Form.Button
                                content='Reset filters'
                                color='red'/>
                        </Form.Group>
                    </Form>
                <CardList cards={this.state.filteredCards} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    card: state.card
})

export default connect(mapStateToProps, { getCards })(FlatListScreen)
export const FLAT_LIST = "/flatList"