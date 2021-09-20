"use strict";

const AccountSQL = require("./AccountSQL");

class Account {
  constructor(body) {
    this.body = body;
  }

  async getProfile() {
    const client = this.body;
    try {
        const user = await AccountSQL.getAccountInfo(client.account_id);
        if (user) {
            return { success: true, user };
        }
    } catch (err) {
        return { success: false, err };
      }
  }

  async login() {
    const client = this.body;
    try {
      const user = await AccountSQL.getAccountInfo(client.account_id);

      if (user) {
        if (user.account_id === client.account_id && user.password === client.password) {
          return { success: true };
        }
        return { success: false, msg: "Incorrect Password!" };
      }
      return { success: false, msg: "Incorrect Account ID!" };
    } catch (err) {
      return { success: false, err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await AccountSQL.register(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }


}

module.exports = Account;
