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
 * @summary A collection of Azure Batch tasks to add.
  *
 */
class TaskAddCollectionParameter {
  /**
   * Create a TaskAddCollectionParameter.
   * @member {array} value The collection of tasks to add. The total serialized
   * size of this collection must be less than 4MB. If it is greater than 4MB
   * (for example if each task has 100's of resource files or environment
   * variables), the request will fail with code 'RequestBodyTooLarge' and
   * should be retried again with fewer tasks.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TaskAddCollectionParameter
   *
   * @returns {object} metadata of TaskAddCollectionParameter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TaskAddCollectionParameter',
      type: {
        name: 'Composite',
        className: 'TaskAddCollectionParameter',
        modelProperties: {
          value: {
            required: true,
            serializedName: 'value',
            constraints: {
              MaxItems: 100
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TaskAddParameterElementType',
                  type: {
                    name: 'Composite',
                    className: 'TaskAddParameter'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TaskAddCollectionParameter;