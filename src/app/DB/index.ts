import config from "../config";
import { USER_ROLE } from "../modules/user/user.constant";
import { IUser } from "../modules/user/user.interface";
import User from "../modules/user/user.model";

const adminUser: IUser = {
  name: config.admin_name as string,
  email: config.admin_email as string,
  password: config.admin_password as string,
  address: config.admin_address as string,
  contact: config.admin_contact as string,
  role: USER_ROLE.admin,
};

const seedAdmin = async () => {
  //when database is connected, we will check is there any user who is super admin
  const isAdminExits = await User.findOne({ role: USER_ROLE.admin });

  if (!isAdminExits) {
    await User.create(adminUser);
  }
};

export default seedAdmin;
