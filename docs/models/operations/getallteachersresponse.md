# GetAllTeachersResponse

## Example Usage

```typescript
import { GetAllTeachersResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllTeachersResponse = {
  result: {
    users: [
      {
        sourcedId: "<id>",
        status: "active",
        enabledUser: true,
        givenName: "<value>",
        familyName: "<value>",
        roles: [
          {
            roleType: "primary",
            role: "teacher",
            org: {
              href: "https://nutritious-morning.net",
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
    totalCount: 4313.29,
    pageCount: 6960.06,
    pageNumber: 4301.48,
    offset: 3237.82,
    limit: 5751.53,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [operations.GetAllTeachersResponseBody](../../models/operations/getallteachersresponsebody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |