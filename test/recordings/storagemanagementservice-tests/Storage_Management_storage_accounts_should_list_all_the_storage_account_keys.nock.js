// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup8499/providers/Microsoft.Storage/storageAccounts/testacc6023/listKeys?api-version=2017-10-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"UzuTvc6A7g/Qvq68ZhWRIicHNlmAKtA6TqyiIf7YpouFLgWy+xityObt9qc5aVAPIMbGeqrEheydzM8826ngQw==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"2aq4EMkVw0SD30Qz6tpkHwwN3+b4Dr4q062N8FHz8H6LmGrKPuTTghdT4/7nQCZTU2YNi5duvYNdtjlwgsa7cA==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '18cb64a6-66ad-4941-bfe1-693145525fdb',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1180',
  'x-ms-correlation-request-id': '18cb64a6-66ad-4941-bfe1-693145525fdb',
  'x-ms-routing-request-id': 'EASTASIA:20171212T055133Z:18cb64a6-66ad-4941-bfe1-693145525fdb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:51:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup8499/providers/Microsoft.Storage/storageAccounts/testacc6023/listKeys?api-version=2017-10-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"UzuTvc6A7g/Qvq68ZhWRIicHNlmAKtA6TqyiIf7YpouFLgWy+xityObt9qc5aVAPIMbGeqrEheydzM8826ngQw==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"2aq4EMkVw0SD30Qz6tpkHwwN3+b4Dr4q062N8FHz8H6LmGrKPuTTghdT4/7nQCZTU2YNi5duvYNdtjlwgsa7cA==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '18cb64a6-66ad-4941-bfe1-693145525fdb',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1180',
  'x-ms-correlation-request-id': '18cb64a6-66ad-4941-bfe1-693145525fdb',
  'x-ms-routing-request-id': 'EASTASIA:20171212T055133Z:18cb64a6-66ad-4941-bfe1-693145525fdb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:51:32 GMT',
  connection: 'close' });
 return result; }]];