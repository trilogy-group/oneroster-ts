# GetScoreScalesForClassScoreScale

Represents a score scale.

## Example Usage

```typescript
import { GetScoreScalesForClassScoreScale } from "@superbuilders/oneroster/models/operations";

let value: GetScoreScalesForClassScoreScale = {
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
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [operations.GetScoreScalesForClassStatus](../../models/operations/getscorescalesforclassstatus.md)                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `dateLastModified`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `metadata`                                                                                                             | Record<string, *any*>                                                                                                  | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `title`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `class`                                                                                                                | [operations.GetScoreScalesForClassClass](../../models/operations/getscorescalesforclassclass.md)                       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `course`                                                                                                               | [operations.GetScoreScalesForClassCourse](../../models/operations/getscorescalesforclasscourse.md)                     | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `scoreScaleValue`                                                                                                      | [operations.GetScoreScalesForClassScoreScaleValue](../../models/operations/getscorescalesforclassscorescalevalue.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |