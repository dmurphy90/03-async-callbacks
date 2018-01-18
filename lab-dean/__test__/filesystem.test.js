'use strict';

const myFs = require('../lib/filesystem.js');
require ('jest');

describe('Reader Module', function() {
  describe('#readWords', function() {
    it('makes sure input is an array and returns null if not', function(){
      expect(myFs.readWords('')).toBe(null);
      expect(myFs.readWords(27)).toBe(null);
    });
    it('verifies if array values are strings returns null if not', function(){
      expect(myFs.readWords([3, 6, 9])).toBe(null);
    });
    it('ensures valid file paths are passed in', function(){
      return myFs.readWords(['../assets/fresh.html', '../assets/new.html', '../assets/nuevo.html'], (err, fd) => {
        if (err) console.error('error 1', err);
        expect(fd).toBe(true);
      });
    });
    it('makes sure the files were written in the correct order', function(){
      return myFs.readWords(['../assets/nuevo.html', '../assets/new.html', '../assets/fresh.html'], (err, fd) => {
        if (err) console.error('error 2', err);
        fd = fd.map(x => x.slice(0, 6));
        expect(fd).toBe(['File 3', 'File 2', 'File1']);
      });
    });
  });
});