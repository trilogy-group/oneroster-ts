# GetAllAcademicSessionsResponse

## Example Usage

```typescript
import { GetAllAcademicSessionsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllAcademicSessionsResponse = {
  result: {
    academicSessions: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        title: "<value>",
        startDate: "<value>",
        endDate: "<value>",
        type: "semester",
        schoolYear: 8651.23,
        org: {
          href: "https://silent-commercial.net",
          sourcedId: "<id>",
          type: "course",
        },
      },
    ],
    totalCount: 3096.85,
    pageCount: 5568.03,
    pageNumber: 330.1,
    offset: 8520.55,
    limit: 1950.88,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.GetAllAcademicSessionsResponseBody](../../models/operations/getallacademicsessionsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |