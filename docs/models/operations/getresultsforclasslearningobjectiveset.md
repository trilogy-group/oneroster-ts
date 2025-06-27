# GetResultsForClassLearningObjectiveSet

## Example Usage

```typescript
import { GetResultsForClassLearningObjectiveSet } from "@superbuilders/oneroster/models/operations";

let value: GetResultsForClassLearningObjectiveSet = {
  source: "<value>",
  learningObjectiveResults: [
    {
      learningObjectiveId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `source`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `learningObjectiveResults`                                                                                                     | [operations.GetResultsForClassLearningObjectiveResult](../../models/operations/getresultsforclasslearningobjectiveresult.md)[] | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |