import { UserModel } from '@/modules/auth/user-model';

const { fields } = UserModel;

export default [
  fields.email,
  fields.firstName,
  fields.lastName,
  fields.school,
  fields.classShool,
  fields.phoneNumber,
  fields.avatarsIam,
  fields.roles,
];
