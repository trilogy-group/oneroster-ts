# GetClassesForTeacherClass

Represents a class.

## Example Usage

```typescript
import { GetClassesForTeacherClass } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForTeacherClass = {
  sourcedId: "<id>",
  status: "tobedeleted",
  title: "<value>",
  classCode: "<value>",
  classType: "scheduled",
  location: "<value>",
  course: {
    href: "https://bowed-sonnet.info/",
    sourcedId: "<id>",
    type: "<value>",
  },
  school: {
    href: "https://sweet-king.com/",
    sourcedId: "<id>",
    type: "<value>",
  },
  terms: [],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [operations.GetClassesForTeacherStatus](../../models/operations/getclassesforteacherstatus.md)       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `dateLastModified`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `title`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `classCode`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `classType`                                                                                          | [operations.GetClassesForTeacherClassType](../../models/operations/getclassesforteacherclasstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `location`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `grades`                                                                                             | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `subjects`                                                                                           | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `course`                                                                                             | [operations.GetClassesForTeacherCourse](../../models/operations/getclassesforteachercourse.md)       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `school`                                                                                             | [operations.GetClassesForTeacherSchool](../../models/operations/getclassesforteacherschool.md)       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `terms`                                                                                              | [operations.GetClassesForTeacherTerm](../../models/operations/getclassesforteacherterm.md)[]         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `subjectCodes`                                                                                       | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `periods`                                                                                            | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `resources`                                                                                          | [operations.GetClassesForTeacherResource](../../models/operations/getclassesforteacherresource.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |