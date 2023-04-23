import React, {useState} from 'react';
import {api, handleError} from 'helpers/api';
import User from 'models/User';
import {useHistory} from 'react-router-dom';
import {Button} from 'components/ui/Button';
import 'styles/views/Login.scss';
import BaseContainer from "components/ui/BaseContainer";
import PropTypes from "prop-types";
import Socket from "components/socket/Socket";

/*
It is possible to add multiple components inside a single file,
however be sure not to clutter your files with an endless amount!
As a rule of thumb, use one file per component and only add small,
specific components that belong to the main one in the same file.
 */
const Login = props => {
  const callSocket = () => {
    api.get('/socket');
  }

  const onMessage = (msg) => {
    alert("Number of messages received from the socket connection: " + msg);
  }

  return (
    <BaseContainer>
      <div className="login container">
        <div className="login form">
          <h1>Hi!</h1>
          <div className="login button-container">
            <Button
              width="100%"
              onClick={() => callSocket()}
            >
              Call Socket
            </Button>
            <Socket
                topics="/game/test/"
                onMessage={onMessage}
            />
          </div>
        </div>
      </div>
    </BaseContainer>
  );
};

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default Login;
