# GetClassesForStudentResponseBody

Successful response containing a collection of classes for the student

## Example Usage

```typescript
import { GetClassesForStudentResponseBody } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForStudentResponseBody = {
  classes: [
    {
      sourcedId: "<id>",
      status: "active",
      title: "<value>",
      classCode: null,
      classType: "homeroom",
      location: "<value>",
      course: {
        href: "https://utilized-resource.net/",
        sourcedId: "<id>",
        type: "<value>",
      },
      school: {
        href: "https://nervous-hamburger.name",
        sourcedId: "<id>",
        type: "<value>",
      },
      terms: [
        {
          href: "https://separate-guacamole.name",
          sourcedId: "<id>",
          type: "<value>",
        },
      ],
    },
  ],
  totalCount: 6328.82,
  pageCount: 9354.56,
  pageNumber: 6884.17,
  offset: 3.54,
  limit: 3234.88,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `classes`                                                                                      | [operations.GetClassesForStudentClass](../../models/operations/getclassesforstudentclass.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `totalCount`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pageCount`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pageNumber`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `offset`                                                                                       | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `limit`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |