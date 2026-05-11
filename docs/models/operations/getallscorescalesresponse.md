# GetAllScoreScalesResponse

## Example Usage

```typescript
import { GetAllScoreScalesResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllScoreScalesResponse = {
  result: {
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
    totalCount: 2648.51,
    pageCount: 8116.22,
    pageNumber: 9920.41,
    offset: 6122.69,
    limit: 8660.4,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.GetAllScoreScalesResponseBody](../../models/operations/getallscorescalesresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |