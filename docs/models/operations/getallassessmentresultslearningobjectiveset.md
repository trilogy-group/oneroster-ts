# GetAllAssessmentResultsLearningObjectiveSet

## Example Usage

```typescript
import { GetAllAssessmentResultsLearningObjectiveSet } from "@superbuilders/oneroster/models/operations";

let value: GetAllAssessmentResultsLearningObjectiveSet = {
  source: "<value>",
  learningObjectiveResults: [
    {
      learningObjectiveId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                                                 | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `learningObjectiveResults`                                                                                                               | [operations.GetAllAssessmentResultsLearningObjectiveResult](../../models/operations/getallassessmentresultslearningobjectiveresult.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |