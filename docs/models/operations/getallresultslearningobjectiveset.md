# GetAllResultsLearningObjectiveSet

## Example Usage

```typescript
import { GetAllResultsLearningObjectiveSet } from "@superbuilders/oneroster/models/operations";

let value: GetAllResultsLearningObjectiveSet = {
  source: "<value>",
  learningObjectiveResults: [
    {
      learningObjectiveId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `learningObjectiveResults`                                                                                           | [operations.GetAllResultsLearningObjectiveResult](../../models/operations/getallresultslearningobjectiveresult.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |