// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobschedules/NodeSDKTestSchedule?api-version=2017-09-01.6.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 21:52:02 GMT',
  etag: '0x8D509DFD0A68534',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '901bd2e8-6d86-4f1a-acfb-f3f48ba4f7e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Mon, 02 Oct 2017 21:52:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobschedules/NodeSDKTestSchedule?api-version=2017-09-01.6.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 21:52:02 GMT',
  etag: '0x8D509DFD0A68534',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '901bd2e8-6d86-4f1a-acfb-f3f48ba4f7e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Mon, 02 Oct 2017 21:52:01 GMT',
  connection: 'close' });
 return result; }]];