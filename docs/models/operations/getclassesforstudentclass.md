# GetClassesForStudentClass

Represents a class.

## Example Usage

```typescript
import { GetClassesForStudentClass } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForStudentClass = {
  sourcedId: "<id>",
  status: "tobedeleted",
  title: "<value>",
  classCode: "<value>",
  classType: "scheduled",
  location: "<value>",
  course: {
    href: "https://utilized-resource.net/",
    sourcedId: "<id>",
    type: "<value>",
  },
  school: null,
  terms: [
    {
      href: "https://separate-guacamole.name",
      sourcedId: "<id>",
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [operations.GetClassesForStudentStatus](../../models/operations/getclassesforstudentstatus.md)       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `dateLastModified`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `title`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `classCode`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `classType`                                                                                          | [operations.GetClassesForStudentClassType](../../models/operations/getclassesforstudentclasstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `location`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `grades`                                                                                             | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `subjects`                                                                                           | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `course`                                                                                             | [operations.GetClassesForStudentCourse](../../models/operations/getclassesforstudentcourse.md)       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `school`                                                                                             | [operations.GetClassesForStudentSchool](../../models/operations/getclassesforstudentschool.md)       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `terms`                                                                                              | [operations.GetClassesForStudentTerm](../../models/operations/getclassesforstudentterm.md)[]         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `subjectCodes`                                                                                       | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `periods`                                                                                            | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `resources`                                                                                          | [operations.GetClassesForStudentResource](../../models/operations/getclassesforstudentresource.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |