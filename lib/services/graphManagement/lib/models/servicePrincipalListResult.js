/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Server response for get tenant service principals API call.
 */
class ServicePrincipalListResult extends Array {
  /**
   * Create a ServicePrincipalListResult.
   * @member {string} [odatanextLink] the URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServicePrincipalListResult
   *
   * @returns {object} metadata of ServicePrincipalListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServicePrincipalListResult',
      type: {
        name: 'Composite',
        className: 'ServicePrincipalListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServicePrincipalElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServicePrincipal'
                  }
              }
            }
          },
          odatanextLink: {
            required: false,
            serializedName: 'odata\\.nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServicePrincipalListResult;