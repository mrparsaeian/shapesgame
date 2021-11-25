import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './rotation/StreamCreate';
import StreamEdit from './rotation/StreamEdit';
import StreamDelete from './rotation/StreamDelete';
import WaitingRoom from './rotation/WaitingRoom';
import StreamShow from './rotation/StreamShow';
import HomePage from './rotation/HomePage';
import ShapesGameBoard from './shapesgame/BlobsGameBoard';
import BlobsGameBoardMap from './shapesgame/BlobsGameBoardMap';
import SPINSurvey from './survey/spinsurvey';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/:email" exact component={HomePage} />
          <Route path="/waitingroom" exact component={WaitingRoom} />
          <Route path="/shapesgameboard" exact component={ShapesGameBoard} />
          <Route path="/shapesgameboardmap" exact component={BlobsGameBoardMap} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />    
          <Route path="/spinsurvey" exact component={SPINSurvey} />          
        </div>
      </Router>
    </div>
  );
};

export default App;
