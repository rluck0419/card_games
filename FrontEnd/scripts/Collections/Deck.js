import Backbone from 'backbone';
import $ from 'jquery';

import Card from '../Models/Card';

const Deck = Backbone.Collection.extend({
  url: 'http://localhost:3000/dashboard',
  model: Card,
  getCards: function() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/dashboard',
      success: (response) => {
        // console.log(response);
      }
    })
  }
})

export default Deck;
