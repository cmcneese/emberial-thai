import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('menu-item', params['menu-item_id']);
  }
});
