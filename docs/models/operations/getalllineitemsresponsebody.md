# GetAllLineItemsResponseBody

Successful response containing a collection of line items

## Example Usage

```typescript
import { GetAllLineItemsResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllLineItemsResponseBody = {
  lineItems: [
    {
      title: "<value>",
      assignDate: new Date("2026-10-07T19:05:28.488Z"),
      dueDate: new Date("2024-08-09T23:32:56.493Z"),
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
  ],
  totalCount: 1458.05,
  pageCount: 3947.52,
  pageNumber: 4321.57,
  offset: 8338,
  limit: 7891.89,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `lineItems`                                                                                | [operations.GetAllLineItemsLineItem](../../models/operations/getalllineitemslineitem.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `totalCount`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pageCount`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pageNumber`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `offset`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |