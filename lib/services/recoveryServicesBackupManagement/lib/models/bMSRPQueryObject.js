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
 * Filters to list backup copies.
 *
 */
class BMSRPQueryObject {
  /**
   * Create a BMSRPQueryObject.
   * @member {date} [startDate] Backup copies created after this time.
   * @member {date} [endDate] Backup copies created before this time.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BMSRPQueryObject
   *
   * @returns {object} metadata of BMSRPQueryObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BMSRPQueryObject',
      type: {
        name: 'Composite',
        className: 'BMSRPQueryObject',
        modelProperties: {
          startDate: {
            required: false,
            serializedName: 'startDate',
            type: {
              name: 'DateTime'
            }
          },
          endDate: {
            required: false,
            serializedName: 'endDate',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = BMSRPQueryObject;