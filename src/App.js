import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { updateState } from './redux/actions';
import { Card, Icon, Image } from 'semantic-ui-react'

class App extends Component {
  componentDidMount(){
    this.props.updateState()
  }

  render() {
    console.log(this.props.articles, "<===")
    return (
      <div className="App">
      {this.props.articles.map(article => {
        return (
          <Card>
          <a href={article.url}>

          <Image src={article.urlToImage} />
          </a>
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>{article.content}</Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
        </Card>
        )
      })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps, {updateState})(App);
