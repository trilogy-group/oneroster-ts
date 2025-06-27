# GetResultsForStudentForClassResponseBody

Successful response containing a collection of results for the specified student in the class

## Example Usage

```typescript
import { GetResultsForStudentForClassResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForStudentForClassResponseBody = {
  results: [
    {
      status: "tobedeleted",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "not submitted",
      scoreDate: new Date("2025-10-02T01:25:57.991Z"),
    },
  ],
  totalCount: 3776.56,
  pageCount: 6053.35,
  pageNumber: 1454.47,
  offset: 3699.99,
  limit: 1400.19,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                        | [operations.GetResultsForStudentForClassResult](../../models/operations/getresultsforstudentforclassresult.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `totalCount`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `pageCount`                                                                                                      | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `pageNumber`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `offset`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `limit`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |