# GetTeachersForClassResponse

## Example Usage

```typescript
import { GetTeachersForClassResponse } from "@superbuilders/oneroster/models/operations";

let value: GetTeachersForClassResponse = {
  result: {
    teachers: [
      {
        sourcedId: "<id>",
        status: "active",
        enabledUser: false,
        givenName: "<value>",
        familyName: "<value>",
        roles: [
          {
            roleType: "primary",
            role: "aide",
            org: {
              href: "https://flashy-forage.org/",
              sourcedId: "<id>",
              type: "<value>",
            },
            beginDate: "<value>",
            endDate: null,
          },
        ],
        agents: [
          {
            href: "https://jittery-doorpost.org/",
            sourcedId: "<id>",
            type: "enrollment",
          },
        ],
      },
    ],
    totalCount: 3067.78,
    pageCount: 3624.91,
    pageNumber: 9671.98,
    offset: 5337.27,
    limit: 4941.1,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.GetTeachersForClassResponseBody](../../models/operations/getteachersforclassresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |