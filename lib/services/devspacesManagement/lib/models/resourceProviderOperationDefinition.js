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
 * Class representing a ResourceProviderOperationDefinition.
 */
class ResourceProviderOperationDefinition {
  /**
   * Create a ResourceProviderOperationDefinition.
   * @member {string} [name] Resource provider operation name.
   * @member {object} [display]
   * @member {string} [display.provider] Name of the resource provider.
   * @member {string} [display.resource] Name of the resource type.
   * @member {string} [display.operation] Name of the resource provider
   * operation.
   * @member {string} [display.description] Description of the resource
   * provider operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResourceProviderOperationDefinition
   *
   * @returns {object} metadata of ResourceProviderOperationDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceProviderOperationDefinition',
      type: {
        name: 'Composite',
        className: 'ResourceProviderOperationDefinition',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          display: {
            required: false,
            serializedName: 'display',
            type: {
              name: 'Composite',
              className: 'ResourceProviderOperationDisplay'
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceProviderOperationDefinition;
