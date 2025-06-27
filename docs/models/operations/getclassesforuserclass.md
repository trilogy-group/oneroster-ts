# GetClassesForUserClass

Represents a class.

## Example Usage

```typescript
import { GetClassesForUserClass } from "@superbuilders/oneroster/models/operations";

let value: GetClassesForUserClass = {
  sourcedId: "<id>",
  status: "tobedeleted",
  title: "<value>",
  classCode: "<value>",
  classType: "homeroom",
  location: "<value>",
  course: {
    href: "https://yellowish-dredger.biz/",
    sourcedId: "<id>",
    type: "<value>",
  },
  school: {
    href: "https://rusty-annual.info/",
    sourcedId: "<id>",
    type: "<value>",
  },
  terms: [
    {
      href: "https://elderly-jury.biz/",
      sourcedId: "<id>",
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.GetClassesForUserStatus](../../models/operations/getclassesforuserstatus.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `dateLastModified`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `title`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `classCode`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `classType`                                                                                    | [operations.GetClassesForUserClassType](../../models/operations/getclassesforuserclasstype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `location`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `grades`                                                                                       | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `subjects`                                                                                     | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `course`                                                                                       | [operations.GetClassesForUserCourse](../../models/operations/getclassesforusercourse.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `school`                                                                                       | [operations.GetClassesForUserSchool](../../models/operations/getclassesforuserschool.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `terms`                                                                                        | [operations.GetClassesForUserTerm](../../models/operations/getclassesforuserterm.md)[]         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `subjectCodes`                                                                                 | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `periods`                                                                                      | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `resources`                                                                                    | [operations.GetClassesForUserResource](../../models/operations/getclassesforuserresource.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |