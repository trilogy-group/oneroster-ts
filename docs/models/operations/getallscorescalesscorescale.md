# GetAllScoreScalesScoreScale

Represents a score scale.

## Example Usage

```typescript
import { GetAllScoreScalesScoreScale } from "@superbuilders/oneroster/models/operations";

let value: GetAllScoreScalesScoreScale = {
  status: "active",
  title: "<value>",
  type: "<value>",
  class: {
    sourcedId: "<id>",
  },
  scoreScaleValue: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [operations.GetAllScoreScalesStatus](../../models/operations/getallscorescalesstatus.md)                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `dateLastModified`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `metadata`                                                                                                   | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `title`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `class`                                                                                                      | [operations.GetAllScoreScalesClass](../../models/operations/getallscorescalesclass.md)                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `course`                                                                                                     | [operations.GetAllScoreScalesCourse](../../models/operations/getallscorescalescourse.md)                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `scoreScaleValue`                                                                                            | [operations.GetAllScoreScalesScoreScaleValue](../../models/operations/getallscorescalesscorescalevalue.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |