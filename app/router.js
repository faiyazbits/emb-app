import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts');
  this.route('login');
  this.route('table');
  this.route('trainer');
  this.route('training-one');
  this.route('inputtask');
  this.route('parents');
});

export default Router;
