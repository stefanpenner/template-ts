import project = require('../');
import chai = require('chai');

const { expect } = chai;

describe('project', function() {
  it('should exist', function() {
    expect(project).to.be.ok;
  });
});
