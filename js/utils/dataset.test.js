import expect from 'expect';
import DataSetUtils from './dataset.js';

describe('DataSetUtils', () => {
  describe('normalizeKey', () => {
    it('normalizeKey("") should return an empty string', () => {
      expect(DataSetUtils.normalizeKey('foo', '')).toEqual('');
    })

    it('normalizeKey(null) should return an empty string', () => {
      expect(DataSetUtils.normalizeKey('foo', '')).toEqual('');
    })

    it('normalizeKey(undefined) should return an empty string', () => {
      expect(DataSetUtils.normalizeKey('foo', '')).toEqual('');
    })

    it('normalize should remove the prefix and make the first letter lower case', () => {
      expect(DataSetUtils.normalizeKey('foo', 'fooBar')).toEqual('bar');
    })
  })
})
