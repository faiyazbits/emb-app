import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | trainer', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:trainer');
    assert.ok(route);
  });
});
