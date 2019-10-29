const expect = require('unexpected');
const { hrefTypes, getHrefType } = require('../lib');

describe('getHrefType', () => {
  it('should detect an absolute URL', () => {
    expect(getHrefType('http://foo.com'), 'to be', hrefTypes.ABSOLUTE);
    expect(getHrefType('https://foo.com'), 'to be', hrefTypes.ABSOLUTE);
  });

  it('should detect a protocol-relative href', () => {
    expect(getHrefType('//foo.com'), 'to be', hrefTypes.PROTOCOL_RELATIVE);
  });

  it('should detect a root-relative href', () => {
    expect(getHrefType('/foo.com'), 'to be', hrefTypes.ROOT_RELATIVE);
  });

  it('should detect a relative href', () => {
    expect(getHrefType('foo.com'), 'to be', hrefTypes.RELATIVE);
  });

  it('should detect an inline href', () => {
    expect(
      getHrefType(`data:text/html,<script>alert('hi');</script>`),
      'to be',
      hrefTypes.INLINE
    );
  });
});
