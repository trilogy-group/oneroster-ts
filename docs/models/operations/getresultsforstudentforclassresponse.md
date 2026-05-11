# GetResultsForStudentForClassResponse

## Example Usage

```typescript
import { GetResultsForStudentForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForStudentForClassResponse = {
  result: {
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
        scoreDate: new Date("2026-10-02T01:25:57.991Z"),
      },
    ],
    totalCount: 3408.47,
    pageCount: 9991.9,
    pageNumber: 4046.66,
    offset: 8847.53,
    limit: 8121.5,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                   | [operations.GetResultsForStudentForClassResponseBody](../../models/operations/getresultsforstudentforclassresponsebody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |