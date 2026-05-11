# GetResultsForLineItemForClassResponseBody

Successful response containing a collection of results for the specified line item in the class

## Example Usage

```typescript
import { GetResultsForLineItemForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForLineItemForClassResponseBody = {
  results: [
    {
      status: "tobedeleted",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "fully graded",
      scoreDate: new Date("2024-06-28T07:43:35.165Z"),
    },
  ],
  totalCount: 6499.85,
  pageCount: 3326.75,
  pageNumber: 733.42,
  offset: 5311.17,
  limit: 885.7,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                          | [operations.GetResultsForLineItemForClassResult](../../models/operations/getresultsforlineitemforclassresult.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `totalCount`                                                                                                       | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `pageCount`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `pageNumber`                                                                                                       | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `offset`                                                                                                           | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |