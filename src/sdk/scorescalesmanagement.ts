/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { scoreScalesManagementCreateScoreScale } from "../funcs/scoreScalesManagementCreateScoreScale.js";
import { scoreScalesManagementDeleteScoreScale } from "../funcs/scoreScalesManagementDeleteScoreScale.js";
import { scoreScalesManagementGetAllScoreScales } from "../funcs/scoreScalesManagementGetAllScoreScales.js";
import { scoreScalesManagementGetScoreScale } from "../funcs/scoreScalesManagementGetScoreScale.js";
import { scoreScalesManagementGetScoreScalesForSchool } from "../funcs/scoreScalesManagementGetScoreScalesForSchool.js";
import { scoreScalesManagementUpdateScoreScale } from "../funcs/scoreScalesManagementUpdateScoreScale.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class ScoreScalesManagement extends ClientSDK {
  /**
   * Get all Score Scales
   *
   * @remarks
   * Get all of the ScoreScales on the service provider.
   */
  async getAllScoreScales(
    request: operations.GetAllScoreScalesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetAllScoreScalesResponse, { offset: number }>
  > {
    return unwrapResultIterator(scoreScalesManagementGetAllScoreScales(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a Score Scale
   *
   * @remarks
   * To create a new scoreScale. The responding system must return the set of sourcedIds that have been allocated to the newly created scoreScale records.
   */
  async createScoreScale(
    request: operations.CreateScoreScaleRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateScoreScaleResponse> {
    return unwrapAsync(scoreScalesManagementCreateScoreScale(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a Score Scale
   *
   * @remarks
   * Get a specific scoreScale on the service provider.
   */
  async getScoreScale(
    request: operations.GetScoreScaleRequest,
    options?: RequestOptions,
  ): Promise<operations.GetScoreScaleResponse> {
    return unwrapAsync(scoreScalesManagementGetScoreScale(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a Score Scale
   *
   * @remarks
   * To update an existing scoreScale. The sourcedId for the record to be updated is supplied by the requesting system.
   */
  async updateScoreScale(
    request: operations.UpdateScoreScaleRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateScoreScaleResponse> {
    return unwrapAsync(scoreScalesManagementUpdateScoreScale(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a Score Scale
   *
   * @remarks
   * Perform a soft delete on a specific ScoreScale on the service provider. This operation changes the status of the ScoreScale to 'tobedeleted'.
   */
  async deleteScoreScale(
    request: operations.DeleteScoreScaleRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(scoreScalesManagementDeleteScoreScale(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Score Scales for a School
   *
   * @remarks
   * Get the set of scoreScales on the service provider for a specific school. If the corresponding record cannot be located, the api will return a 404 error code and message 'School not found.'
   */
  async getScoreScalesForSchool(
    request: operations.GetScoreScalesForSchoolRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.GetScoreScalesForSchoolResponse, { offset: number }>
  > {
    return unwrapResultIterator(scoreScalesManagementGetScoreScalesForSchool(
      this,
      request,
      options,
    ));
  }
}
