import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="app">
        <Card>
          <Image src='https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.0-9/33869011_2127309097284240_5423128425814556672_n.jpg?_nc_cat=108&_nc_ht=scontent.fcrk1-1.fna&oh=72bbd80e7d263f5fea4239895d3dcb44&oe=5CA69A94' size='medium' rounded />
          <Card.Content>
            <Card.Header>Viktor Dela Cruz</Card.Header>
            <Card.Meta>
              <i aria-hidden="true" class="location arrow icon"></i>
              Metro Manila, Philippines
            </Card.Meta>
            <Card.Description>
            Viktor is a software developer who enjoys playing computer games and eating bibingka.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="https://www.linkedin.com/in/viktor-dela-cruz-776913118/" target="_blank"rel="noopener noreferrer">
              <Icon name='linkedin' />
              Viktor Dela Cruz
            </a>
          </Card.Content>
          <Card.Content extra>
            <a href="https://github.com/viktordelacruz" target="_blank" rel="noopener noreferrer">
              <Icon name='github' />
              @viktordelacruz
            </a>
          </Card.Content>
          <Card.Content extra>
            <a href="mailto:viktormdelacruz@gmail.com" target="_top" rel="noopener noreferrer">
              <Icon name='mail' />
              send me an email
            </a>
          </Card.Content>
          <Card.Content extra>
            <a href="https://en.wikipedia.org/wiki/Bibingka" target="_top" rel="noopener noreferrer">
              <Icon name='wikipedia w' />
             what is bibingka?
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;