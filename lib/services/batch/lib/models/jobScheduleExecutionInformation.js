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
 * @summary Contains information about jobs that have been and will be run
 * under a job schedule.
  *
 */
class JobScheduleExecutionInformation {
  /**
   * Create a JobScheduleExecutionInformation.
   * @member {date} [nextRunTime] The next time at which a job will be created
   * under this schedule. This property is meaningful only if the schedule is
   * in the active state when the time comes around. For example, if the
   * schedule is disabled, no job will be created at nextRunTime unless the job
   * is enabled before then.
   * @member {object} [recentJob] Information about the most recent job under
   * the job schedule. This property is present only if the at least one job
   * has run under the schedule.
   * @member {string} [recentJob.id]
   * @member {string} [recentJob.url]
   * @member {date} [endTime] The time at which the schedule ended. This
   * property is set only if the job schedule is in the completed state.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobScheduleExecutionInformation
   *
   * @returns {object} metadata of JobScheduleExecutionInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobScheduleExecutionInformation',
      type: {
        name: 'Composite',
        className: 'JobScheduleExecutionInformation',
        modelProperties: {
          nextRunTime: {
            required: false,
            serializedName: 'nextRunTime',
            type: {
              name: 'DateTime'
            }
          },
          recentJob: {
            required: false,
            serializedName: 'recentJob',
            type: {
              name: 'Composite',
              className: 'RecentJob'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = JobScheduleExecutionInformation;