import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | scientist', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:scientist');
    assert.ok(route);
  });
});
