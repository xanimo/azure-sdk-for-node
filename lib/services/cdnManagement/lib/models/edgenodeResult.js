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
 * Result of the request to list CDN edgenodes. It contains a list of ip
 * address group and a URL link to get the next set of results.
 */
class EdgenodeResult extends Array {
  /**
   * Create a EdgenodeResult.
   * @member {string} [nextLink] URL to get the next set of edgenode list
   * results if there are any.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EdgenodeResult
   *
   * @returns {object} metadata of EdgenodeResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EdgenodeResult',
      type: {
        name: 'Composite',
        className: 'EdgenodeResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EdgeNodeElementType',
                  type: {
                    name: 'Composite',
                    className: 'EdgeNode'
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

module.exports = EdgenodeResult;