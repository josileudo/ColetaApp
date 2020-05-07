import React, {Component} from 'react';
import {db} from '../utils/firebase';

export default class FirebaseService {
  static getDataList = (nodePath, callback, size = 5) => {
    let query = db.ref(nodePath).limitToLast(size);
    query.on('value', (dataSnapshot) => {
      let items = [];
      dataSnapshot.forEach((childSnapshot) => {
        let item = childSnapshot.val();
        item['key'] = childSnapshot.key;
        items.push(item);
        console.log(item);
      });
      callback(items);
    });
    return query;
  };
}
