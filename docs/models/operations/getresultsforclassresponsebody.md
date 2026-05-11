# GetResultsForClassResponseBody

Successful response containing a collection of results for the class

## Example Usage

```typescript
import { GetResultsForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForClassResponseBody = {
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
      scoreDate: new Date("2025-03-06T09:46:38.738Z"),
    },
  ],
  totalCount: 3022.78,
  pageCount: 796.65,
  pageNumber: 3811.7,
  offset: 6072.01,
  limit: 8770.73,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `results`                                                                                    | [operations.GetResultsForClassResult](../../models/operations/getresultsforclassresult.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `totalCount`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pageCount`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pageNumber`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `offset`                                                                                     | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `limit`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |