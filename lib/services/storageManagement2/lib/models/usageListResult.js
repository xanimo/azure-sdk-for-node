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
 * The response from the List Usages operation.
 */
class UsageListResult extends Array {
  /**
   * Create a UsageListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of UsageListResult
   *
   * @returns {object} metadata of UsageListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UsageListResult',
      type: {
        name: 'Composite',
        className: 'UsageListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UsageElementType',
                  type: {
                    name: 'Composite',
                    className: 'Usage'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = UsageListResult;