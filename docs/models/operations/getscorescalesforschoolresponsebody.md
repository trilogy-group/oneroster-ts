# GetScoreScalesForSchoolResponseBody

Successful response containing a collection of score scales

## Example Usage

```typescript
import { GetScoreScalesForSchoolResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetScoreScalesForSchoolResponseBody = {
  scoreScales: [
    {
      status: "tobedeleted",
      title: "<value>",
      type: "<value>",
      class: {
        sourcedId: "<id>",
      },
      scoreScaleValue: [
        {
          itemValueLHS: "<value>",
          itemValueRHS: "<value>",
        },
      ],
    },
  ],
  totalCount: 1224.22,
  pageCount: 4618.13,
  pageNumber: 8224.67,
  offset: 957.8,
  limit: 8800.32,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `scoreScales`                                                                                                  | [operations.GetScoreScalesForSchoolScoreScale](../../models/operations/getscorescalesforschoolscorescale.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `totalCount`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `pageCount`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `pageNumber`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `offset`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `limit`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |