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
 * Defines the metrics that indicate how well an item was rated by others.
 *
 * @extends models['Rating']
 */
class AggregateRating extends models['Rating'] {
  /**
   * Create a AggregateRating.
   * @member {number} [reviewCount] The number of times the recipe has been
   * rated or reviewed.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AggregateRating
   *
   * @returns {object} metadata of AggregateRating
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AggregateRating',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'PropertiesItem',
        className: 'AggregateRating',
        modelProperties: {
          text: {
            required: false,
            readOnly: true,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          ratingValue: {
            required: true,
            serializedName: 'ratingValue',
            type: {
              name: 'Number'
            }
          },
          bestRating: {
            required: false,
            readOnly: true,
            serializedName: 'bestRating',
            type: {
              name: 'Number'
            }
          },
          reviewCount: {
            required: false,
            readOnly: true,
            serializedName: 'reviewCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AggregateRating;