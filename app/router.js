import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('category', function() {
      this.route('new');
      this.route('detail', {path: '/:detail_id'});
      this.route('new-item', { path: '/:menu-category_id/new-item'});
      // this.route('edit-item');
    });
    this.route('edit-item', { path: '/item/:menu-item_id/edit-item'});
  });
});

export default Router;
