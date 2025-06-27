# AssessmentResultLearningObjectiveSet

## Example Usage

```typescript
import { AssessmentResultLearningObjectiveSet } from "@superbuilders/oneroster/models/components";

let value: AssessmentResultLearningObjectiveSet = {
  source: "<value>",
  learningObjectiveResults: [
    {
      learningObjectiveId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `learningObjectiveResults`                                                                                                 | [components.AssessmentResultLearningObjectiveResult](../../models/components/assessmentresultlearningobjectiveresult.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |