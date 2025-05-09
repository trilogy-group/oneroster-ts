/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { organizationsManagementCreateOrg } from "../funcs/organizationsManagementCreateOrg.js";
import { organizationsManagementDeleteOrg } from "../funcs/organizationsManagementDeleteOrg.js";
import { organizationsManagementGetAllOrgs } from "../funcs/organizationsManagementGetAllOrgs.js";
import { organizationsManagementGetOrg } from "../funcs/organizationsManagementGetOrg.js";
import { organizationsManagementUpdateOrg } from "../funcs/organizationsManagementUpdateOrg.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class OrganizationsManagement extends ClientSDK {
  /**
   * Get all Organizations
   *
   * @remarks
   * To get all Organizations on the service provider.
   */
  async getAllOrgs(
    request: operations.GetAllOrgsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.GetAllOrgsResponse, { offset: number }>> {
    return unwrapResultIterator(organizationsManagementGetAllOrgs(
      this,
      request,
      options,
    ));
  }

  /**
   * Create an Organization
   *
   * @remarks
   * To create a new Organization. The responding system must return the set of sourcedIds that have been allocated to the newly created org record.
   */
  async createOrg(
    request?: operations.CreateOrgRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateOrgResponse> {
    return unwrapAsync(organizationsManagementCreateOrg(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a specific Organization
   *
   * @remarks
   * Get a specific Organization on the service provider. If the corresponding record cannot be located, the api will return a 404 error code and message 'Organization not found.'
   */
  async getOrg(
    request: operations.GetOrgRequest,
    options?: RequestOptions,
  ): Promise<operations.GetOrgResponse> {
    return unwrapAsync(organizationsManagementGetOrg(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an Organization
   *
   * @remarks
   * To update an existing Organization. The sourcedId for the record to be updated is supplied by the requesting system.
   */
  async updateOrg(
    request: operations.UpdateOrgRequest,
    options?: RequestOptions,
  ): Promise<{ [k: string]: any }> {
    return unwrapAsync(organizationsManagementUpdateOrg(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an Organization
   *
   * @remarks
   * Perform a soft delete on a specific Organization on the service provider. The operation changes the status of the Organization to 'tobedeleted'.
   */
  async deleteOrg(
    request: operations.DeleteOrgRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(organizationsManagementDeleteOrg(
      this,
      request,
      options,
    ));
  }
}
