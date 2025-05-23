/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { schoolsManagementCreateSchool } from "../../funcs/schoolsManagementCreateSchool.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateSchoolRequest$inboundSchema.optional(),
};

export const tool$schoolsManagementCreateSchool: ToolDefinition<typeof args> = {
  name: "schools-management-create-school",
  description: `Create a new School

To create a new School. The responding system must return the set of sourcedIds that have been allocated to the newly created school record.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await schoolsManagementCreateSchool(
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

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
