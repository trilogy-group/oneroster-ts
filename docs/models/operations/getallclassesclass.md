# GetAllClassesClass

Represents a class.

## Example Usage

```typescript
import { GetAllClassesClass } from "@superbuilders/oneroster/models/operations";

let value: GetAllClassesClass = {
  sourcedId: "<id>",
  status: "active",
  title: "<value>",
  classCode: "<value>",
  classType: "homeroom",
  location: null,
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourcedId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.GetAllClassesStatus](../../models/operations/getallclassesstatus.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dateLastModified`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `classCode`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `classType`                                                                                   | [operations.GetAllClassesClassType](../../models/operations/getallclassesclasstype.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `location`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `grades`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `subjects`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `course`                                                                                      | [operations.GetAllClassesCourse](../../models/operations/getallclassescourse.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `school`                                                                                      | [operations.GetAllClassesSchool](../../models/operations/getallclassesschool.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `terms`                                                                                       | [operations.GetAllClassesTerm](../../models/operations/getallclassesterm.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subjectCodes`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `periods`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `resources`                                                                                   | [operations.GetAllClassesResource](../../models/operations/getallclassesresource.md)[]        | :heavy_minus_sign:                                                                            | N/A                                                                                           |