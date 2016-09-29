import Backbone from 'backbone';

const Card = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: 'http://localhost:3000/dashboard',
  defaults: {
    name: '',
    suit: '',
    deck_id: 1,
  }
});

export default Card;
