import React from 'react'
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Launches from './components/Launches';
import Launch from './components/Launch';
import Navbar from './components/Navbar';
import Rocket from './components/Rocket';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Navbar />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
          <Route exact path="/rockets/:rocket_id" component={Rocket} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
