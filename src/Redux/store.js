import React, { Component } from 'react';
import {createStore} from 'redux'
import { Rootreducer } from './reducer/Rootreducer';


export const store =createStore(Rootreducer)
    store.subscribe(()=>{console.log(store.getState())})
