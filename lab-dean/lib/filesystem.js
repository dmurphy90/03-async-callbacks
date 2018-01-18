'use strict';

const fs = require('fs');


exports.readWords = function(arr, callback) {
  if (!arr || !Array.isArray(arr)) return null;
  for (let i in arr) if (typeof arr[i] !== 'string') return null;
  let pages = [];
  let counter = 0;
  fs.readFile(`${__dirname}/${arr[counter]}`, (err, data) => {
    pages.push(data.toString());
    counter ++;
    fs.readFile(`${__dirname}/${arr[counter]}`, (err, data) => {
      pages.push(data.toString());
      counter ++;
      fs.readFile(`${__dirname}/${arr[counter]}`, (err, data) => {
        pages.push(data.toString());
        counter ++;
        callback(err, pages);
      });
    });
  });
};