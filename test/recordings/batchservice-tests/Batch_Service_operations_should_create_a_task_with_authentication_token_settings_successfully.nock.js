// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:27:06 GMT',
  etag: '0x8D607A476DDB5B0',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithAuthTokenSettings',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c1bb3115-1da7-48e7-99c0-23d10e9f51ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithAuthTokenSettings',
  date: 'Tue, 21 Aug 2018 20:27:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:27:06 GMT',
  etag: '0x8D607A476DDB5B0',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithAuthTokenSettings',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c1bb3115-1da7-48e7-99c0-23d10e9f51ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithAuthTokenSettings',
  date: 'Tue, 21 Aug 2018 20:27:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithAuthTokenSettings?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"TaskWithAuthTokenSettings\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithAuthTokenSettings\",\"eTag\":\"0x8D607A476DDB5B0\",\"creationTime\":\"2018-08-21T20:27:06.9776304Z\",\"lastModified\":\"2018-08-21T20:27:06.9776304Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:27:06.9776304Z\",\"commandLine\":\"cmd /c echo Hello World\",\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"authenticationTokenSettings\":{\r\n    \"access\":[\r\n      \"job\"\r\n    ]\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Tue, 21 Aug 2018 20:27:06 GMT',
  etag: '0x8D607A476DDB5B0',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f15e1fea-ce4e-432b-b85c-55cf1ca2d5e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:27:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithAuthTokenSettings?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"TaskWithAuthTokenSettings\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithAuthTokenSettings\",\"eTag\":\"0x8D607A476DDB5B0\",\"creationTime\":\"2018-08-21T20:27:06.9776304Z\",\"lastModified\":\"2018-08-21T20:27:06.9776304Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:27:06.9776304Z\",\"commandLine\":\"cmd /c echo Hello World\",\"userIdentity\":{\r\n    \"autoUser\":{\r\n      \"elevationLevel\":\"nonadmin\"\r\n    }\r\n  },\"authenticationTokenSettings\":{\r\n    \"access\":[\r\n      \"job\"\r\n    ]\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Tue, 21 Aug 2018 20:27:06 GMT',
  etag: '0x8D607A476DDB5B0',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f15e1fea-ce4e-432b-b85c-55cf1ca2d5e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:27:07 GMT',
  connection: 'close' });
 return result; }]];