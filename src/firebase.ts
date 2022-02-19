import { nanoid } from 'nanoid';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref as databaseRef, push } from 'firebase/database';
import {
  getStorage,
  ref as storageRef,
  uploadString,
  getDownloadURL,
  StorageReference,
} from 'firebase/storage';

const config = {
  apiKey: 'AIzaSyC5zbz5tUoTcUHZbzZs4e5k31bHA4D_Q0Y',
  authDomain: 'propertyprecinct.firebaseapp.com',
  databaseURL: 'https://propertyprecinct.asia-southeast1.firebasedatabase.app',
  projectId: 'propertyprecinct',
  storageBucket: 'propertyprecinct',
  messagingSenderId: '690459406387',
  appId: '1:690459406387:web:46f1fc357fda7248867346',
  measurementId: 'G-W3LT1XZVMP',
};

const app = initializeApp(config);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);
const storageTemp = getStorage(app, 'gs://propertyprecinct-temp');

const databaseApi = {
  reportsRef: 'reports',
  writeReportToDb: function (data: unknown) {
    const locationRef = databaseRef(database);
    return push(locationRef, data);
  },
};

const storageApi = {
  getPreviewUrl: function (ref: StorageReference) {
    return getDownloadURL(ref);
  },
  writePreviewToTemp: function (preview: string) {
    const fileRef = storageRef(storageTemp, nanoid());
    return uploadString(fileRef, preview, 'data_url');
  },
};

export { app, analytics, database, storage, databaseApi, storageApi };
