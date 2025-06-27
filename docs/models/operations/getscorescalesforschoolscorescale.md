# GetScoreScalesForSchoolScoreScale

Represents a score scale.

## Example Usage

```typescript
import { GetScoreScalesForSchoolScoreScale } from "@superbuilders/oneroster/models/operations";

let value: GetScoreScalesForSchoolScoreScale = {
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `sourcedId`                                                                                                              | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `status`                                                                                                                 | [operations.GetScoreScalesForSchoolStatus](../../models/operations/getscorescalesforschoolstatus.md)                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `dateLastModified`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `metadata`                                                                                                               | Record<string, *any*>                                                                                                    | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `title`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `type`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `class`                                                                                                                  | [operations.GetScoreScalesForSchoolClass](../../models/operations/getscorescalesforschoolclass.md)                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `course`                                                                                                                 | [operations.GetScoreScalesForSchoolCourse](../../models/operations/getscorescalesforschoolcourse.md)                     | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `scoreScaleValue`                                                                                                        | [operations.GetScoreScalesForSchoolScoreScaleValue](../../models/operations/getscorescalesforschoolscorescalevalue.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |