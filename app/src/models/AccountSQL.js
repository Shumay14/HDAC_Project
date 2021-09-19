"use strict";

const db = require("../config/db");

// Profile
class AccountStorage {
  static getAccountInfo(account_id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM account WHERE account-id = ?;";
      db.query(query, [account_id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }

  // Register
  static async register(account) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO account(account-id, wallet-address, profile-image, email, password) VALUES(?, ?, ?, ?, ?);";
      db.query(
        query,
        [
          account.account_id,
          account.wallet_address,
          account.profile_image,
          account.email,
          account.password,
        ],
        (err) => {
          if (err) reject(`${err}`);
          else resolve({ success: true });
        }
      );
    });
  }

  // Login
  // static Login(loginInfo) {
  //   return new Promise((resolve, reject) => {
  //     const query =
  //       "SELECT id FROM account WHERE account-id = ? AND password = ?;";
  //     db.query(
  //       query,
  //       [loginInfo.account-id, loginInfo.password],
  //       (err, data) => {
  //         if (err) reject(`${err}`);
  //         else resolve(data[0]);
  //       }
  //     );
  //   });
  // }
}

module.exports = AccountStorage;
