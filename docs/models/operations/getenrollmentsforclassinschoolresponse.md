# GetEnrollmentsForClassInSchoolResponse

## Example Usage

```typescript
import { GetEnrollmentsForClassInSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetEnrollmentsForClassInSchoolResponse = {
  result: {
    enrollments: [
      {
        sourcedId: "<id>",
        status: "active",
        role: "teacher",
        primary: false,
        beginDate: "2024-01-01",
        endDate: "2024-01-01",
        user: {
          href: "https://short-giant.net",
          sourcedId: "<id>",
          type: "<value>",
        },
        class: {
          href: "https://sneaky-comestible.net/",
          sourcedId: "<id>",
          type: "<value>",
        },
      },
    ],
    totalCount: 8546.44,
    pageCount: 4898.01,
    pageNumber: 68.98,
    offset: 7659.93,
    limit: 1957.96,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                       | [operations.GetEnrollmentsForClassInSchoolResponseBody](../../models/operations/getenrollmentsforclassinschoolresponsebody.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |