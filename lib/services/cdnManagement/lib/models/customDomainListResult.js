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
 * Result of the request to list custom domains. It contains a list of custom
 * domain objects and a URL link to get the next set of results.
 */
class CustomDomainListResult extends Array {
  /**
   * Create a CustomDomainListResult.
   * @member {string} [nextLink] URL to get the next set of custom domain
   * objects if there are any.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CustomDomainListResult
   *
   * @returns {object} metadata of CustomDomainListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CustomDomainListResult',
      type: {
        name: 'Composite',
        className: 'CustomDomainListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CustomDomainElementType',
                  type: {
                    name: 'Composite',
                    className: 'CustomDomain'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CustomDomainListResult;