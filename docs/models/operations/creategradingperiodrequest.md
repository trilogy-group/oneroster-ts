# CreateGradingPeriodRequest

## Example Usage

```typescript
import { CreateGradingPeriodRequest } from "@superbuilders/oneroster/models/operations";

let value: CreateGradingPeriodRequest = {
  academicSession: {
    sourcedId: "<id>",
    status: "tobedeleted",
    title: "<value>",
    startDate: "<value>",
    endDate: "<value>",
    type: "gradingPeriod",
    schoolYear: "<value>",
    org: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `academicSession`                                                                                              | [operations.CreateGradingPeriodAcademicSession](../../models/operations/creategradingperiodacademicsession.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |