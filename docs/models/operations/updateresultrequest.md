# UpdateResultRequest

## Example Usage

```typescript
import { UpdateResultRequest } from "@superbuilders/oneroster/models/operations";

let value: UpdateResultRequest = {
  sourcedId: "<id>",
  requestBody: {
    result: {
      status: "active",
      lineItem: {
        sourcedId: "<id>",
      },
      student: {
        sourcedId: "<id>",
      },
      scoreStatus: "exempt",
      scoreDate: new Date("2026-12-18T02:39:54.603Z"),
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `sourcedId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | The sourcedId of the result to update                                                    |
| `requestBody`                                                                            | [operations.UpdateResultRequestBody](../../models/operations/updateresultrequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |