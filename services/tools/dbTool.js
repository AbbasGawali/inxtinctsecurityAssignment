import Employee from "../../model/Employee.js";
import Order from "../../model/Order.js";

const dbTool = async ({ type }) => { 

  if (type == "EMPLOYEES_JOINED_LAST_MONTH") {
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

    const count = await Employee.countDocuments({
      joinDate: { $gt: lastMonth },
    });
    return { text: `There are ${count} employees who joined last month` };
  }

  if (type == "ORDERS_OVER_500") {
    const orders = await Order.find({ amount: { $gt: 500 } });
    return { text: `There are ${orders.length} orders above 500` };
  }

  return { text: "We Couldnt process your query at this time" };
};

export default dbTool;
