# UpdateLineItemRequest

## Example Usage

```typescript
import { UpdateLineItemRequest } from "@superbuilders/oneroster/models/operations";

let value: UpdateLineItemRequest = {
  sourcedId: "<id>",
  requestBody: {
    lineItem: {
      title: "<value>",
      assignDate: new Date("2025-03-20T23:18:56.025Z"),
      dueDate: new Date("2024-07-27T04:26:11.874Z"),
      class: {
        sourcedId: "<id>",
      },
      school: {
        sourcedId: "<id>",
      },
      category: {
        sourcedId: "<id>",
      },
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The sourcedId of the line item to update                                                     |
| `requestBody`                                                                                | [operations.UpdateLineItemRequestBody](../../models/operations/updatelineitemrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |