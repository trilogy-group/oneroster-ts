# GetStudentsForSchoolResponse

## Example Usage

```typescript
import { GetStudentsForSchoolResponse } from "@superbuilders/oneroster/models/operations";

let value: GetStudentsForSchoolResponse = {
  result: {
    users: [
      {
        sourcedId: "<id>",
        status: "tobedeleted",
        enabledUser: false,
        givenName: "<value>",
        familyName: "<value>",
        roles: [
          {
            roleType: "secondary",
            role: "guardian",
            org: {
              href: "https://acceptable-impact.org/",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: "<value>",
          },
        ],
        agents: [],
      },
    ],
    totalCount: 4438.72,
    pageCount: 4285.61,
    pageNumber: 8947.28,
    offset: 8671.77,
    limit: 4165.26,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [operations.GetStudentsForSchoolResponseBody](../../models/operations/getstudentsforschoolresponsebody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |