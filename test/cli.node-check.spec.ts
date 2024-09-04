import * as nodeCheck from '../src/cli/node-check';

describe('node check', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return true', () => {
    jest.spyOn(nodeCheck, 'getNodeVersion').mockImplementation(() => '1.2.3');
    expect(nodeCheck.eq('1.2.3')).toBe(true);
    expect(nodeCheck.lt('1.2.4')).toBe(true);
    expect(nodeCheck.lte('1.2.4')).toBe(true);
    expect(nodeCheck.lte('1.2.3')).toBe(true);
    expect(nodeCheck.gt('1.2.2')).toBe(true);
    expect(nodeCheck.gte('1.2.3')).toBe(true);
    expect(nodeCheck.gte('1.2.2')).toBe(true);
    expect(nodeCheck.ne('1.2.4')).toBe(true);
  });

  it('should return false', () => {
    jest.spyOn(nodeCheck, 'getNodeVersion').mockImplementation(() => '1.2.4');
    expect(nodeCheck.eq('1.2.3')).toBe(false);
    expect(nodeCheck.lt('1.2.4')).toBe(false);
    expect(nodeCheck.lte('1.2.3')).toBe(false);
    expect(nodeCheck.gt('1.2.5')).toBe(false);
    expect(nodeCheck.gte('1.2.5')).toBe(false);
    expect(nodeCheck.ne('1.2.4')).toBe(false);
  });

  it('should get node version', () => {
    expect(nodeCheck.getNodeVersion()).toBe(process.versions.node);
  });
});
