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
 * Intelligence Pack containing a string name and boolean indicating if it's
 * enabled.
 *
 */
class IntelligencePack {
  /**
   * Create a IntelligencePack.
   * @member {string} [name] The name of the intelligence pack.
   * @member {boolean} [enabled] The enabled boolean for the intelligence pack.
   */
  constructor() {
  }

  /**
   * Defines the metadata of IntelligencePack
   *
   * @returns {object} metadata of IntelligencePack
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntelligencePack',
      type: {
        name: 'Composite',
        className: 'IntelligencePack',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          enabled: {
            required: false,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = IntelligencePack;