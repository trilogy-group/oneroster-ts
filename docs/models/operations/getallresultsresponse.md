# GetAllResultsResponse

## Example Usage

```typescript
import { GetAllResultsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllResultsResponse = {
  result: {
    results: [
      {
        status: "active",
        lineItem: {
          sourcedId: "<id>",
        },
        student: {
          sourcedId: "<id>",
        },
        scoreStatus: "exempt",
        scoreDate: new Date("2025-03-19T22:34:33.693Z"),
      },
    ],
    totalCount: 4214.4,
    pageCount: 9850.73,
    pageNumber: 2122.72,
    offset: 9451.07,
    limit: 892.9,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.GetAllResultsResponseBody](../../models/operations/getallresultsresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |