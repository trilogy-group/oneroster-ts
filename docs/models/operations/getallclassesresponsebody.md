# GetAllClassesResponseBody

Successful response with a list of classes

## Example Usage

```typescript
import { GetAllClassesResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetAllClassesResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: "<value>",
      classType: "scheduled",
      location: "<value>",
      course: {
        href: "https://electric-conversation.name",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://athletic-underneath.name",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [],
    },
  ],
  totalCount: 6846.92,
  pageCount: 4389.86,
  pageNumber: 1121.62,
  offset: 9348.79,
  limit: 7641.12,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `classes`                                                                        | [operations.GetAllClassesClass](../../models/operations/getallclassesclass.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `totalCount`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `pageCount`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `pageNumber`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `offset`                                                                         | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `limit`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |