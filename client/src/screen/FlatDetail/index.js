import { Icon, Grid, Container, Header, Button, Image, GridColumn } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

import {
    AddCommentForm,
    Allowed,
    Availability,
    CommentsListPage,
    Flatmates,
    Location,
    PreferredFlatmates,
    Price,
    UserInfo
} from '../../components'

import { cardService } from '../../_services/card.service'
import { commentService } from '../../_services/comment.service'
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getCard } from '../../_actions/card.actions';
import photo from '../../assets/images/flat.jpg'
import './style.css'

class FlatDetailScreen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            currentCardId: props.match.params.cardId,
            card: {},
            comments: [],
            commentText: '',
            commentUser: '',
        }   
        this.upvoteCard = this.upvoteCard.bind(this)
    }

    async componentDidMount() {
        await this.props.getCard(this.state.currentCardId);
        //const commentsData = await commentService.getAllCommentsByCardId(this.state.currentCardId);
        this.setState({
            card: this.props.card.card,
            //comments: commentsData,
        })
    }

    async upvoteCard() {
        const cardWithUpvote = await cardService.upvoteCard(this.state.currentCardId)
        this.setState({
            card: cardWithUpvote
        })
    }

    handleCommentChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    handleCommentFormSubmit = async e => {
        e.preventDefault()

        const comment = {
            cardId: this.state.card._id,
            user: this.state.commentUser,
            text: this.state.commentText
        }

        await commentService.saveComment(comment)

        const allComments = await commentService.getAllCommentsByCardId(this.state.currentCardId);
        this.setState({
            comments: allComments,
        })
    }
    render() {
        return (
            <>
                <Container id='flat-detail-header'>
                    <Button> <Link to='/flatList'>GO BACK TO THE LIST</Link></Button>
                    
                    
                    <Header as='h1'>{this.state.card.title}</Header>
                </Container>
                <Grid celled>
                    <Grid.Row only='computer tablet'>
                        <Grid.Column width={8}>
                            {this.state.card.url ?
                            <Image src={`${this.state.card.url}`} alt='room photo' /> :
                            null}
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Container textAlign='left'>
                            {this.state.card.price && <Price price={this.state.card.price.value}
                                                            currency={this.state.card.price.currency}  /> }
                            <Location street={this.state.card.street} district={this.state.card.district} />

                            {this.state.card &&
                                <Flatmates male={this.state.card.flatmatesMale}
                                    female={this.state.card.flatmatesFemale} />
                            }
                            {this.state.card &&
                                <PreferredFlatmates
                                    male={this.state.card.prefFlatmatesMale}
                                    female={this.state.card.prefFlatmatesFemale}
                                    couple={this.state.card.prefFlatmatesCouple} />
                            }
                            <Availability availability={this.state.card.availabilityDate} stay={this.state.card.minStay} />
                            <Allowed smoking={this.state.card.smokingAllowed} pet={this.state.card.petAllowed} />
                            {this.state.card.user && <UserInfo username={this.state.card.user.username} email={this.state.card.user.email} />}
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row only='mobile'>
                        <Grid.Column>
                            <Image src={photo} alt="flat" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row only='mobile'>
                        <Grid.Column>
                            <Container textAlign='left'>
                                {this.state.card.price && <Price price={this.state.card.price.value}
                                                                currency={this.state.card.price.currency}  /> }
                                <Location street={this.state.card.street} district={this.state.card.district} />

                                {this.state.card &&
                                    <Flatmates male={this.state.card.flatmatesMale}
                                        female={this.state.card.flatmatesFemale} />
                                }
                                {this.state.card &&
                                    <PreferredFlatmates
                                        male={this.state.card.prefFlatmatesMale}
                                        female={this.state.card.prefFlatmatesFemale}
                                        couple={this.state.card.prefFlatmatesCouple} />
                                }
                                <Availability availability={this.state.card.availabilityDate} stay={this.state.card.minStay} />
                                <Allowed smoking={this.state.card.smokingAllowed} pet={this.state.card.petAllowed} />
                                {this.state.card.user && <UserInfo username={this.state.card.user.username} email={this.state.card.user.email} />}
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    card: state.card
})

export default connect(mapStateToProps, {getCard})(FlatDetailScreen)
export const FLAT_DETAIL = "/cards/:cardId"