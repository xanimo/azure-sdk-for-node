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
 * @summary The result of listing the jobs in an account.
 */
class CloudJobListResult extends Array {
  /**
   * Create a CloudJobListResult.
   * @member {string} [odatanextLink]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CloudJobListResult
   *
   * @returns {object} metadata of CloudJobListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CloudJobListResult',
      type: {
        name: 'Composite',
        className: 'CloudJobListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CloudJobElementType',
                  type: {
                    name: 'Composite',
                    className: 'CloudJob'
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

module.exports = CloudJobListResult;