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
 * The Data Lake Analytics job error details.
 *
 */
class JobInnerError {
  /**
   * Create a JobInnerError.
   * @member {number} [diagnosticCode] the diagnostic error code.
   * @member {string} [severity] the severity level of the failure. Possible
   * values include: 'Warning', 'Error', 'Info', 'SevereWarning', 'Deprecated',
   * 'UserWarning'
   * @member {string} [details] the details of the error message.
   * @member {string} [component] the component that failed.
   * @member {string} [errorId] the specific identifier for the type of error
   * encountered in the job.
   * @member {string} [helpLink] the link to MSDN or Azure help for this type
   * of error, if any.
   * @member {string} [internalDiagnostics] the internal diagnostic stack trace
   * if the user requesting the job error details has sufficient permissions it
   * will be retrieved, otherwise it will be empty.
   * @member {string} [message] the user friendly error message for the
   * failure.
   * @member {string} [resolution] the recommended resolution for the failure,
   * if any.
   * @member {string} [source] the ultimate source of the failure (usually
   * either SYSTEM or USER).
   * @member {string} [description] the error message description
   * @member {object} [innerError] the inner error of this specific job error
   * message, if any.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobInnerError
   *
   * @returns {object} metadata of JobInnerError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobInnerError',
      type: {
        name: 'Composite',
        className: 'JobInnerError',
        modelProperties: {
          diagnosticCode: {
            required: false,
            readOnly: true,
            serializedName: 'diagnosticCode',
            type: {
              name: 'Number'
            }
          },
          severity: {
            required: false,
            readOnly: true,
            serializedName: 'severity',
            type: {
              name: 'Enum',
              allowedValues: [ 'Warning', 'Error', 'Info', 'SevereWarning', 'Deprecated', 'UserWarning' ]
            }
          },
          details: {
            required: false,
            readOnly: true,
            serializedName: 'details',
            type: {
              name: 'String'
            }
          },
          component: {
            required: false,
            readOnly: true,
            serializedName: 'component',
            type: {
              name: 'String'
            }
          },
          errorId: {
            required: false,
            readOnly: true,
            serializedName: 'errorId',
            type: {
              name: 'String'
            }
          },
          helpLink: {
            required: false,
            readOnly: true,
            serializedName: 'helpLink',
            type: {
              name: 'String'
            }
          },
          internalDiagnostics: {
            required: false,
            readOnly: true,
            serializedName: 'internalDiagnostics',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          resolution: {
            required: false,
            readOnly: true,
            serializedName: 'resolution',
            type: {
              name: 'String'
            }
          },
          source: {
            required: false,
            readOnly: true,
            serializedName: 'source',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          innerError: {
            required: false,
            readOnly: true,
            serializedName: 'innerError',
            type: {
              name: 'Composite',
              className: 'JobInnerError'
            }
          }
        }
      }
    };
  }
}

module.exports = JobInnerError;