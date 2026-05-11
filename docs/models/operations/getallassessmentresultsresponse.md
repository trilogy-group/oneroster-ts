# GetAllAssessmentResultsResponse

## Example Usage

```typescript
import { GetAllAssessmentResultsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllAssessmentResultsResponse = {
  result: {
    assessmentResults: [
      {
        status: "tobedeleted",
        assessmentLineItem: {
          sourcedId: "<id>",
        },
        student: {
          sourcedId: "<id>",
        },
        scoreDate: new Date("2026-08-27T19:19:54.088Z"),
        scoreStatus: "exempt",
      },
    ],
    totalCount: 2769.6,
    pageCount: 5224.96,
    pageNumber: 3698.19,
    offset: 4879.52,
    limit: 5368.17,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | [operations.GetAllAssessmentResultsResponseBody](../../models/operations/getallassessmentresultsresponsebody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |