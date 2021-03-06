import { helper } from 'ember-helper';
import { isEmpty as _isEmpty } from 'ember-utils';

export function isEmpty([target = '']) {
  return _isEmpty(target);
}

export default helper(isEmpty);
