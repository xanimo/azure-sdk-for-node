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
 * List of previewed features.
 */
class FeatureOperationsListResult extends Array {
  /**
   * Create a FeatureOperationsListResult.
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of FeatureOperationsListResult
   *
   * @returns {object} metadata of FeatureOperationsListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FeatureOperationsListResult',
      type: {
        name: 'Composite',
        className: 'FeatureOperationsListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'FeatureResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'FeatureResult'
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

module.exports = FeatureOperationsListResult;