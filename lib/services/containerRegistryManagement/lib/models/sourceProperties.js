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
 * The properties of the source code repository.
 *
 */
class SourceProperties {
  /**
   * Create a SourceProperties.
   * @member {string} sourceControlType The type of source control service.
   * Possible values include: 'Github', 'VisualStudioTeamService'
   * @member {string} repositoryUrl The full URL to the source code respository
   * @member {string} [branch] The branch name of the source code.
   * @member {object} [sourceControlAuthProperties] The authorization
   * properties for accessing the source code repository and to set up
   * webhooks for notifications.
   * @member {string} [sourceControlAuthProperties.tokenType] The type of Auth
   * token. Possible values include: 'PAT', 'OAuth'
   * @member {string} [sourceControlAuthProperties.token] The access token used
   * to access the source control provider.
   * @member {string} [sourceControlAuthProperties.refreshToken] The refresh
   * token used to refresh the access token.
   * @member {string} [sourceControlAuthProperties.scope] The scope of the
   * access token.
   * @member {number} [sourceControlAuthProperties.expiresIn] Time in seconds
   * that the token remains valid
   */
  constructor() {
  }

  /**
   * Defines the metadata of SourceProperties
   *
   * @returns {object} metadata of SourceProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SourceProperties',
      type: {
        name: 'Composite',
        className: 'SourceProperties',
        modelProperties: {
          sourceControlType: {
            required: true,
            serializedName: 'sourceControlType',
            type: {
              name: 'String'
            }
          },
          repositoryUrl: {
            required: true,
            serializedName: 'repositoryUrl',
            type: {
              name: 'String'
            }
          },
          branch: {
            required: false,
            serializedName: 'branch',
            type: {
              name: 'String'
            }
          },
          sourceControlAuthProperties: {
            required: false,
            serializedName: 'sourceControlAuthProperties',
            type: {
              name: 'Composite',
              className: 'AuthInfo'
            }
          }
        }
      }
    };
  }
}

module.exports = SourceProperties;
