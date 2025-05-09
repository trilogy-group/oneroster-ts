/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersManagementDeleteUser } from "../../funcs/usersManagementDeleteUser.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteUserRequest$inboundSchema,
};

export const tool$usersManagementDeleteUser: ToolDefinition<typeof args> = {
  name: "users-management-delete-user",
  description: `Delete a User

Perform a soft delete on a specific User on the service provider. This operation changes the status of the User to 'tobedeleted'.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await usersManagementDeleteUser(
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
