# ResultLearningObjectiveSet

## Example Usage

```typescript
import { ResultLearningObjectiveSet } from "@superbuilders/oneroster/models/components";

let value: ResultLearningObjectiveSet = {
  source: "<value>",
  learningObjectiveResults: [
    {
      learningObjectiveId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `source`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `learningObjectiveResults`                                                                             | [components.ResultLearningObjectiveResult](../../models/components/resultlearningobjectiveresult.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |