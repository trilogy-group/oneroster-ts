/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assessmentLineItemsManagementDeleteAssessmentLineItem } from "../../funcs/assessmentLineItemsManagementDeleteAssessmentLineItem.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteAssessmentLineItemRequest$inboundSchema,
};

export const tool$assessmentLineItemsManagementDeleteAssessmentLineItem:
  ToolDefinition<typeof args> = {
    name: "assessment-line-items-management-delete-assessment-line-item",
    description: `Delete an Assessment Line Item

Perform a soft delete on a specific Assessment Line Item on the service provider. This operation changes the status of the Assessment Line Item to 'tobedeleted'.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await assessmentLineItemsManagementDeleteAssessmentLineItem(
          client,
          args.request,
          { fetchOptions: { signal: ctx.signal } },
        ).$inspect();

      if (!result.ok) {
        return {
          content: [{ type: "text", text: result.error.message }],
          isError: true,
        };
      }

      return formatResult(void 0, apiCall);
    },
  };
