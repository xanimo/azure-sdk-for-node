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

const models = require('./index');

/**
 * A Data Lake Analytics catalog U-SQL distribution information object.
 *
 */
class USqlDistributionInfo {
  /**
   * Create a USqlDistributionInfo.
   * @member {number} [type] the type of this distribution.
   * @member {array} [keys] the list of directed columns in the distribution
   * @member {number} [count] the count of indices using this distribution.
   * @member {number} [dynamicCount] the dynamic count of indices using this
   * distribution.
   */
  constructor() {
  }

  /**
   * Defines the metadata of USqlDistributionInfo
   *
   * @returns {object} metadata of USqlDistributionInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'USqlDistributionInfo',
      type: {
        name: 'Composite',
        className: 'USqlDistributionInfo',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'Number'
            }
          },
          keys: {
            required: false,
            serializedName: 'keys',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'USqlDirectedColumnElementType',
                  type: {
                    name: 'Composite',
                    className: 'USqlDirectedColumn'
                  }
              }
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          dynamicCount: {
            required: false,
            serializedName: 'dynamicCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = USqlDistributionInfo;