# GetScoreScalesForClassResponseBody

Successful response containing a collection of score scales for the class

## Example Usage

```typescript
import { GetScoreScalesForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetScoreScalesForClassResponseBody = {
  scoreScales: [
    {
      status: "active",
      title: "<value>",
      type: "<value>",
      class: {
        sourcedId: "<id>",
      },
      scoreScaleValue: [],
    },
  ],
  totalCount: 1992.42,
  pageCount: 3619.38,
  pageNumber: 3846.36,
  offset: 3549.51,
  limit: 6668.49,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `scoreScales`                                                                                                | [operations.GetScoreScalesForClassScoreScale](../../models/operations/getscorescalesforclassscorescale.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `totalCount`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `pageCount`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `pageNumber`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `offset`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `limit`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |