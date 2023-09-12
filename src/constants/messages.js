const messages = {
  "string.alphanum": "{{#label}} يجب أن يحتوي أحرف وأرقام فقط",
  "string.base": "{{#label}} يجب أن تكون القيمة مجموعة محارف",
  "date.base": "{{#label}}يجب ألا يكون فارغا",
  "date.empty": "{{#label}}يجب ألا يكون فارغا",
  "number.base": "{{#label}} يجب أن تكون القيمة رقما صحيحا",
  "string.base64": "{{#label}} must be a valid base64 string",
  "string.creditCard": "{{#label}} must be a credit card",
  "string.dataUri": "{{#label}} يجب أن تكون القيمة رابط",
  "string.domain": "{{#label}} must contain a valid domain name",
  "string.email": "{{#label}} يجب أن يحتوي على عنوان بريد إلكتروني",
  "string.empty": "{{#label}} يجب ألا يكون فارغا",
  "string.guid": "{{#label}} must be a valid GUID",
  "string.hex": "{{#label}} must only contain hexadecimal characters",
  "string.hexAlign": "{{#label}} hex decoded representation must be byte aligned",
  "string.hostname": "{{#label}} must be a valid hostname",
  "string.ip": "{{#label}} must be a valid ip address with a {{#cidr}} CIDR",
  "string.ipVersion": "{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR",
  "string.isoDate": "{{#label}} يجب أن يحتوي تاريخ",
  "string.isoDuration": "{{#label}} must be a valid ISO 8601 duration",
  "string.length": "{{#label}} طول النص يجب أن يكون  {{#limit}} محرفا",
  "string.lowercase": "{{#label}} must only contain lowercase characters",
  "string.max": "{{#label}} طول النص يجب أن يكون على الأكثر {{#limit}} محرفا",
  "number.max": "{{#label}} يجب أن يكون على الأكثر {{#limit}} محرفا",
  "string.min": "{{#label}} طول النص يجب أن يكون على الأقل {{#limit}} محرفا",
  "number.min": "{{#label}} يجب أن يكون على الأقل {{#limit}}",
  "array.min": "{{#label}} يجب أن يتضمن على الأقل {{#limit}} عنصرا",
  "string.normalize": "{{#label}} must be unicode normalized in the {{#form}} form",
  "string.token": "{{#label}} must only contain alpha-numeric and underscore characters",
  "string.pattern.base": "{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}",
  "string.pattern.name": "{{#label}} with value {:[.]} fails to match the {{#name}} pattern",
  "string.pattern.invert.base": "{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}",
  "string.pattern.invert.name": "{{#label}} with value {:[.]} matches the inverted {{#name}} pattern",
  "string.trim": "{{#label}} يجب ألا يحتوي على فراغات في أوله أو اخره",
  "number.trim": "{{#label}} يجب ألا يحتوي على فراغات في أوله أو اخره",
  "string.uri": "{{#label}} يجب أن يكون رابط",
  "string.uriCustomScheme": "{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern",
  "string.uriRelativeOnly": "{{#label}} must be a valid relative uri",
  "string.uppercase": "{{#label}} must only contain uppercase characters",
  "number.greater": "{{#label}} يجب ان يكون اكبر من وقت الافتتاح",
  "any.required": "{{#label}} مطلوب",
};

export default messages;
