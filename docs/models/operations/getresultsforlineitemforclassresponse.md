# GetResultsForLineItemForClassResponse

## Example Usage

```typescript
import { GetResultsForLineItemForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForLineItemForClassResponse = {
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
        scoreStatus: "fully graded",
        scoreDate: new Date("2024-06-28T07:43:35.165Z"),
      },
    ],
    totalCount: 7298.04,
    pageCount: 4528.82,
    pageNumber: 6708.99,
    offset: 2455.62,
    limit: 9124.39,
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                     | [operations.GetResultsForLineItemForClassResponseBody](../../models/operations/getresultsforlineitemforclassresponsebody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |