# GetAllSchoolsResponse

## Example Usage

```typescript
import { GetAllSchoolsResponse } from "@superbuilders/oneroster/models/operations";

let value: GetAllSchoolsResponse = {
  result: {
    orgs: [
      {
        sourcedId: "<id>",
        status: "active",
        name: "<value>",
        type: "department",
        identifier: "<value>",
        children: [
          {
            href: "https://staid-retrospectivity.info",
            sourcedId: "<id>",
            type: "<value>",
          },
        ],
      },
    ],
    totalCount: 5127.29,
    pageCount: 865.19,
    pageNumber: 7827.95,
    offset: 8596.37,
    limit: 5133.15,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.GetAllSchoolsResponseBody](../../models/operations/getallschoolsresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |