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
 * @summary An error that occurred when executing or evaluating a pool
 * autoscale formula.
  *
 */
class AutoScaleRunError {
  /**
   * Create a AutoScaleRunError.
   * @member {string} [code] An identifier for the autoscale error. Codes are
   * invariant and are intended to be consumed programmatically.
   * @member {string} [message] A message describing the autoscale error,
   * intended to be suitable for display in a user interface.
   * @member {array} [values] A list of additional error details related to the
   * autoscale error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AutoScaleRunError
   *
   * @returns {object} metadata of AutoScaleRunError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AutoScaleRunError',
      type: {
        name: 'Composite',
        className: 'AutoScaleRunError',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NameValuePairElementType',
                  type: {
                    name: 'Composite',
                    className: 'NameValuePair'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AutoScaleRunError;