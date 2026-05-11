# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "@superbuilders/oneroster/models/operations";

let value: UpdateUserRequest = {
  sourcedId: "<id>",
  requestBody: {
    user: {
      enabledUser: true,
      givenName: "<value>",
      familyName: "<value>",
      roles: [],
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `sourcedId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The sourcedId of the user to update                                                  |
| `requestBody`                                                                        | [operations.UpdateUserRequestBody](../../models/operations/updateuserrequestbody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |