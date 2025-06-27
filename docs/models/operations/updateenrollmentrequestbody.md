# UpdateEnrollmentRequestBody

## Example Usage

```typescript
import { UpdateEnrollmentRequestBody } from "@superbuilders/oneroster/models/operations";

let value: UpdateEnrollmentRequestBody = {
  enrollment: {
    role: "student",
    beginDate: "2024-01-01",
    endDate: "2024-01-01",
    user: {
      sourcedId: "<id>",
    },
    class: {
      sourcedId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `enrollment`                                                                                   | [operations.UpdateEnrollmentEnrollment](../../models/operations/updateenrollmentenrollment.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |