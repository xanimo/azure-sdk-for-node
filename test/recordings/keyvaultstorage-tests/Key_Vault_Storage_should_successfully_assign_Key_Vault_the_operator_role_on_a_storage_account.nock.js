// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '6d8e19c2-3a60-481f-8ebb-118dc3007c5d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourcegroups/nodeTestGroup8988?api-version=2018-03-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup8988\",\"name\":\"nodeTestGroup8988\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '187',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '39c234d9-004b-4ffc-9b09-74d4d4f50b10',
  'x-ms-correlation-request-id': '39c234d9-004b-4ffc-9b09-74d4d4f50b10',
  'x-ms-routing-request-id': 'WESTUS2:20180627T235239Z:39c234d9-004b-4ffc-9b09-74d4d4f50b10',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 27 Jun 2018 23:52:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup8988/providers/Microsoft.KeyVault/vaults/testacc5018?api-version=2018-02-14', '*')
  .reply(200, "{\"id\":\"/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup8988/providers/Microsoft.KeyVault/vaults/testacc5018\",\"name\":\"testacc5018\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"sku\":{\"family\":\"A\",\"name\":\"standard\"},\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"accessPolicies\":[{\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"objectId\":\"7541419d-883d-452f-a823-56aa8bf0749f\",\"permissions\":{\"secrets\":[\"get\",\"list\",\"set\",\"delete\",\"backup\",\"restore\",\"recover\",\"purge\"],\"storage\":[\"get\",\"list\",\"delete\",\"set\",\"update\",\"regeneratekey\",\"recover\",\"purge\",\"backup\",\"restore\",\"setsas\",\"listsas\",\"getsas\",\"deletesas\"]}}],\"enabledForDeployment\":false,\"vaultUri\":\"https://testacc5018.vault.azure.net\",\"provisioningState\":\"RegisteringDns\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '802',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-keyvault-service-version': '1.0.0.220',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-IIS/10.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '5208564f-6179-4c65-bd7a-dbc6a69a6441',
  'x-ms-correlation-request-id': '5208564f-6179-4c65-bd7a-dbc6a69a6441',
  'x-ms-routing-request-id': 'WESTUS2:20180627T235246Z:5208564f-6179-4c65-bd7a-dbc6a69a6441',
  date: 'Wed, 27 Jun 2018 23:52:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup8988/providers/Microsoft.KeyVault/vaults/testacc5018?api-version=2018-02-14')
  .reply(200, "{\"id\":\"/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup8988/providers/Microsoft.KeyVault/vaults/testacc5018\",\"name\":\"testacc5018\",\"type\":\"Microsoft.KeyVault/vaults\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"sku\":{\"family\":\"A\",\"name\":\"standard\"},\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"accessPolicies\":[{\"tenantId\":\"72f988bf-86f1-41af-91ab-2d7cd011db47\",\"objectId\":\"7541419d-883d-452f-a823-56aa8bf0749f\",\"permissions\":{\"secrets\":[\"get\",\"list\",\"set\",\"delete\",\"backup\",\"restore\",\"recover\",\"purge\"],\"storage\":[\"get\",\"list\",\"delete\",\"set\",\"update\",\"regeneratekey\",\"recover\",\"purge\",\"backup\",\"restore\",\"setsas\",\"listsas\",\"getsas\",\"deletesas\"]}}],\"enabledForDeployment\":false,\"vaultUri\":\"https://testacc5018.vault.azure.net/\",\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '798',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-keyvault-service-version': '1.0.0.220',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-IIS/10.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '81807ffa-e430-49b7-a4ea-f29e278dfbd3',
  'x-ms-correlation-request-id': '81807ffa-e430-49b7-a4ea-f29e278dfbd3',
  'x-ms-routing-request-id': 'WESTUS2:20180627T235316Z:81807ffa-e430-49b7-a4ea-f29e278dfbd3',
  date: 'Wed, 27 Jun 2018 23:53:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup8988/providers/Microsoft.Storage/storageAccounts/testakvsa725?api-version=2018-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'text/plain; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/providers/Microsoft.Storage/locations/westus/asyncoperations/13677821-d80a-4bae-92c0-e81a17ae32e0?monitor=true&api-version=2018-03-01-preview',
  'retry-after': '17',
  'x-ms-request-id': '13677821-d80a-4bae-92c0-e81a17ae32e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0,Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'ca38f23f-88d8-45c9-8bb8-db64ce1e1fb9',
  'x-ms-routing-request-id': 'WESTUS2:20180627T235318Z:ca38f23f-88d8-45c9-8bb8-db64ce1e1fb9',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 27 Jun 2018 23:53:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/providers/Microsoft.Storage/locations/westus/asyncoperations/13677821-d80a-4bae-92c0-e81a17ae32e0?monitor=true&api-version=2018-03-01-preview')
  .reply(200, "{\"sku\":{\"name\":\"Standard_RAGRS\",\"tier\":\"Standard\"},\"kind\":\"Storage\",\"id\":\"/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup8988/providers/Microsoft.Storage/storageAccounts/testakvsa725\",\"name\":\"testakvsa725\",\"type\":\"Microsoft.Storage/storageAccounts\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"networkAcls\":{\"bypass\":\"AzureServices\",\"virtualNetworkRules\":[],\"ipRules\":[],\"defaultAction\":\"Allow\"},\"trustedDirectories\":[\"72f988bf-86f1-41af-91ab-2d7cd011db47\"],\"supportsHttpsTrafficOnly\":false,\"encryption\":{\"services\":{\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2018-06-27T23:53:18.5429883Z\"},\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2018-06-27T23:53:18.5429883Z\"}},\"keySource\":\"Microsoft.Storage\"},\"provisioningState\":\"Succeeded\",\"creationTime\":\"2018-06-27T23:53:18.2617285Z\",\"primaryEndpoints\":{\"blob\":\"https://testakvsa725.blob.core.windows.net/\",\"queue\":\"https://testakvsa725.queue.core.windows.net/\",\"table\":\"https://testakvsa725.table.core.windows.net/\",\"file\":\"https://testakvsa725.file.core.windows.net/\"},\"primaryLocation\":\"westus\",\"statusOfPrimary\":\"available\",\"secondaryLocation\":\"eastus\",\"statusOfSecondary\":\"available\",\"secondaryEndpoints\":{\"blob\":\"https://testakvsa725-secondary.blob.core.windows.net/\",\"queue\":\"https://testakvsa725-secondary.queue.core.windows.net/\",\"table\":\"https://testakvsa725-secondary.table.core.windows.net/\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1380',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd1a38905-ba34-4f40-96ed-7cbebe60ca00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0,Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'd1649f16-467c-4446-af73-4add25e12c32',
  'x-ms-routing-request-id': 'WESTUS2:20180627T235349Z:d1649f16-467c-4446-af73-4add25e12c32',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 27 Jun 2018 23:53:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('///providers/Microsoft.Authorization/roleDefinitions?$filter=roleName%20eq%20%27Storage%20Account%20Key%20Operator%20Service%20Role%27&api-version=2018-01-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"roleName\":\"Storage Account Key Operator Service Role\",\"type\":\"BuiltInRole\",\"description\":\"Storage Account Key Operators are allowed to list and regenerate keys on Storage Accounts\",\"assignableScopes\":[\"/\"],\"permissions\":[{\"actions\":[\"Microsoft.Storage/storageAccounts/listkeys/action\",\"Microsoft.Storage/storageAccounts/regeneratekey/action\"],\"notActions\":[],\"dataActions\":[],\"notDataActions\":[]}],\"createdOn\":\"2017-04-13T18:26:11.5770570Z\",\"updatedOn\":\"2017-04-13T20:57:14.5990198Z\",\"createdBy\":null,\"updatedBy\":null},\"id\":\"/providers/Microsoft.Authorization/roleDefinitions/81a9662b-bebf-436f-a333-f67b29880f12\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"81a9662b-bebf-436f-a333-f67b29880f12\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '737',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-charge': '1',
  'x-ms-request-id': '4c00d2ca-ed6b-4d84-8816-cf4ceda1c44d',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly' ],
  server: 'Microsoft-IIS/10.0',
  'x-powered-by': 'ASP.NET',
  'x-ms-correlation-request-id': '80c5fd47-cab4-4f17-9fb6-372958e6c238',
  'x-ms-routing-request-id': 'WESTUS2:20180627T235349Z:80c5fd47-cab4-4f17-9fb6-372958e6c238',
  date: 'Wed, 27 Jun 2018 23:53:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('//subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup8988/providers/Microsoft.Storage/storageAccounts/testakvsa725/providers/Microsoft.Authorization/roleAssignments/afb48884-7051-4b73-b83f-afcca5decd79?api-version=2018-01-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleDefinitionId\":\"/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/providers/Microsoft.Authorization/roleDefinitions/81a9662b-bebf-436f-a333-f67b29880f12\",\"principalId\":\"93c27d83-f79b-4cb2-8dd4-4aa716542e74\",\"principalType\":\"ServicePrincipal\",\"scope\":\"/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup8988/providers/Microsoft.Storage/storageAccounts/testakvsa725\",\"createdOn\":\"2018-06-27T23:53:49.6661846Z\",\"updatedOn\":\"2018-06-27T23:53:49.6661846Z\",\"createdBy\":null,\"updatedBy\":\"7541419d-883d-452f-a823-56aa8bf0749f\"},\"id\":\"/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup8988/providers/Microsoft.Storage/storageAccounts/testakvsa725/providers/Microsoft.Authorization/roleAssignments/afb48884-7051-4b73-b83f-afcca5decd79\",\"type\":\"Microsoft.Authorization/roleAssignments\",\"name\":\"afb48884-7051-4b73-b83f-afcca5decd79\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '901',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-charge': '10',
  'x-ms-request-id': '172e2ceb-6bad-47b2-b160-3d2ae9dc0a82',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'set-cookie': [ 'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly' ],
  server: 'Microsoft-IIS/10.0',
  'x-powered-by': 'ASP.NET',
  'x-ms-correlation-request-id': '4590ca98-6fdd-408f-9ae7-faf5124db937',
  'x-ms-routing-request-id': 'WESTUS2:20180627T235358Z:4590ca98-6fdd-408f-9ae7-faf5124db937',
  date: 'Wed, 27 Jun 2018 23:53:58 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['afb48884-7051-4b73-b83f-afcca5decd79'];};
 exports.randomTestIdsGenerated = function() { return ['nodeTestGroup8988','testacc5018','testakvsa725'];};