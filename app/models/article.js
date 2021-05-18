import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
  hasMany,
} = DS;

export default Model.extend({
  title: attr('string', {defaultValue: ''}),
  author:belongsTo('people'),
  comments:hasMany('comment')

});
