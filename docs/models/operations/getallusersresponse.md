# GetAllUsersResponse

## Example Usage

```typescript
import { GetAllUsersResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllUsersResponse = {
  result: {
    users: [
      {
        sourcedId: "<id>",
        status: "active",
        enabledUser: false,
        givenName: "<value>",
        familyName: "<value>",
        roles: [],
        agents: [],
      },
    ],
    totalCount: 4965.9,
    pageCount: 2634.28,
    pageNumber: 8734.66,
    offset: 5658.47,
    limit: 3979.62,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.GetAllUsersResponseBody](../../models/operations/getallusersresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |